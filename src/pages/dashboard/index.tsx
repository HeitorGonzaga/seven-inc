import React from 'react';
import LottieView from 'lottie-react-native';
import {
    Container, 
    HeaderContainer, 
    HeaderText, 
    AnimationContainer, 
    BodyContainer, 
    BodyTitle, 
    BodyOptions, 
    BodyOptionItem,
    BodyOptionItemText
} from './styles';

import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import COLORS from '../../shareds/colors';

const Dashboard : React.FC = ()=>{
    const navigation = useNavigation();

    //Função para navegar para a tela Employee
    const _handleGoToEmployee = ()=>{
        navigation.navigate('Employee');
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderText color={COLORS.SECUNDARY}>Hello</HeaderText>
                <HeaderText color={COLORS.PRIMARY}>Welcome</HeaderText>
            </HeaderContainer>
            <AnimationContainer>
                <LottieView source={require('../../assets/lottie/rh.json')} autoPlay loop style={{width:'100%'}}/>
            </AnimationContainer>
            <BodyContainer>
                <BodyTitle>Options</BodyTitle>
                <BodyOptions>
                    <BodyOptionItem onPress={()=> _handleGoToEmployee()}>
                        <Icon name='user-tie' size={45} color={COLORS.PRIMARY}/>
                        <BodyOptionItemText>Add Employee</BodyOptionItemText>
                    </BodyOptionItem>                    
                </BodyOptions>
            </BodyContainer>
        </Container>
    );
}

export default Dashboard;