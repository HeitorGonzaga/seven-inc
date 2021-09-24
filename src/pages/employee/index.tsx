import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
import {
    Container,
    HeaderContainer,
    HeaderText,
    AnimationContainer,
    BodyContainer,
} from './styles';

import EmployeeProps from '../../interfaces/EmployeeProps';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { toDate } from 'date-fns-tz';
import { format } from 'date-fns';
import Input from '../../components/input';
import Button from '../../components/button';
import { ModalComponent, TypeSelect } from '../../components/modalcomponent';

import api from '../../services/api';

const Employee: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [bornDate, setBornDate] = useState<Date>(new Date());
    const [salary, setSalary] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');


    const inputNameRef = useRef<TextInput>();
    const inputSalaryRef = useRef<TextInput>();
    const inputPositionRef = useRef<TextInput>();


    const _handleClearFields = () => {
        setName('');
        setBornDate(new Date());
        setSalary('');
        setPosition('');
    }

    const _handleCreate = async () => {
        try {
            if (name && bornDate && salary && position) {
                const isValidSalary = Number(salary) | 0;
                if (isValidSalary === 0) {
                    _handleShowModal(true, 'The value entered for the salary field is invalid');
                } else {
                    const employee: EmployeeProps = {
                        bornDate,
                        name,
                        position,
                        salary: Number(salary)
                    }
                    const sResult = await api.post('/employees', employee);
                    if (sResult.status == 201) {
                        _handleShowModal(false, 'Cool, your record was saved successfully!');
                        _handleClearFields();
                    } else {
                        _handleShowModal(true, 'Oops we had an unexpected return.');
                    }
                }
            } else {
                _handleShowModal(true, 'All fields must be filled!');
            }
        } catch (err) {
            _handleShowModal(true, 'Oops, we had a problem registering your request.');
        }
    }

    const _handleShowModal = (error: boolean, msg: string) => {
        setError(error);
        setMessage(msg);
        setShowModal(true);
    }

    const _handleShowCalendar = useCallback(() => {
        setShowCalendar(() => true);
    }, [showCalendar]);

    return (
        <Container keyboardVerticalOffset={20}>
            <ScrollView style={{ flex: 1, width: '100%' }} bounces={false} showsVerticalScrollIndicator={false}>
                <HeaderContainer>
                    <HeaderText color={'#C5CAD0'}>Employees</HeaderText>
                    <HeaderText color={'#566B8B'}>Add a new Employee</HeaderText>
                </HeaderContainer>
                <AnimationContainer>
                    <LottieView source={require('../../assets/lottie/rh.json')} autoPlay loop style={{ width: '100%' }} />

                </AnimationContainer>
                <BodyContainer>
                    {showCalendar == true ?
                        <RNDateTimePicker
                            value={bornDate}
                            mode={'date'}
                            is24Hour={true}
                            display="spinner"
                            onChange={(e, date) => {
                                if (date) {
                                    const selectedDate = toDate(date);
                                    setBornDate(() => selectedDate);
                                }
                                setShowCalendar(() => false);
                                inputSalaryRef.current?.focus();
                            }}
                        /> : null}
                    <Input
                        placeholder='Name'
                        ref={inputNameRef}
                        onChangeText={(value) => setName(value)}
                        value={name}
                        autoCorrect={false}
                        autoCompleteType='off'
                        style={{ fontSize: 16 }}
                        returnKeyType='next'
                        onSubmitEditing={() => {
                            _handleShowCalendar();
                        }}
                    />

                    <Input
                        placeholder='Born Date'
                        editable={false}
                        value={format(bornDate, 'dd/MM/yyyy')}
                        possuiEvento={true}
                        iconEvento='calendar-outline'
                        evento={() => _handleShowCalendar()}
                        returnKeyType='next'
                        onSubmitEditing={() => {
                            inputSalaryRef.current?.focus();
                        }}


                    />

                    <Input
                        ref={inputSalaryRef}
                        placeholder='Salary'
                        onChangeText={(value) => setSalary(value)}
                        value={salary}
                        autoCorrect={false}
                        autoCompleteType='off'
                        style={{ fontSize: 16 }}
                        returnKeyType='next'
                        keyboardType={'decimal-pad'}
                        onSubmitEditing={() => {
                            inputPositionRef.current?.focus();
                        }}
                    />

                    <Input
                        ref={inputPositionRef}
                        placeholder='Position'
                        onChangeText={(value) => setPosition(value)}
                        value={position}
                        autoCorrect={false}
                        autoCompleteType='off'
                        style={{ fontSize: 16 }}
                        returnKeyType='next'
                        onSubmitEditing={() => {
                            _handleCreate();
                        }}
                    />
                    <Button onPress={() => { _handleCreate() }} isLoading={false}>Save a new Employee</Button>
                </BodyContainer>

            </ScrollView>
            {
                showModal && <ModalComponent message={message} type={isError ? TypeSelect.ERROR : TypeSelect.SUCESS} event={() => setShowModal(false)} />
            }
        </Container>
    );
}

export default Employee;