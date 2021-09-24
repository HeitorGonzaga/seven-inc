import React from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  IconMenu,
  Modal,
  ModalContainer,
  ModalContainerTitle,
  ModalContainerInfo,
  ModalContainerAnimation,
  Title,
  TextInformation
} from './styles';



import LottieView from 'lottie-react-native';
import Button from '../button';

enum TypeSelect{
  SUCESS = "SUCESS",
  ERROR = "ERROR"
}

interface InfoProps {
  message: string;
  type: TypeSelect,
  event(): void,
}

/*
* Component ModalComponent
*/

const ModalComponent: React.FC<InfoProps> = ({
  type,
  event,
  message
}) => {
  return (
    <>
      <Container>
        
        <Modal style={{opacity:1}}>
            <ModalContainer>
              <ModalContainerTitle>
                <Title>SevenInc</Title>
              </ModalContainerTitle>
              <ModalContainerAnimation>
                {
                  type === TypeSelect.SUCESS ? <LottieView source={require('../../assets/lottie/success.json')} autoPlay loop style={{ width: '100%' }} /> : <LottieView source={require('../../assets/lottie/empty.json')} autoPlay loop style={{ width: '100%' }} />
                }
              </ModalContainerAnimation>
              <ModalContainerInfo>
                <TextInformation>{
                  message
                }</TextInformation>
              </ModalContainerInfo>
            </ModalContainer>
            <Button onPress={()=>event()}>Close</Button>
        </Modal>
        
      </Container>
      
    </>
  );
};

export {ModalComponent, TypeSelect};
