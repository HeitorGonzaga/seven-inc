import React from "react";

import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Container, ButtonText } from "./styles";
import COLORS from '../../shareds/colors';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  backgroud?: string;
  isLoading?: boolean;
}

/*
* Componente Button
*/

const Button: React.FC<ButtonProps> = ({ children, backgroud=COLORS.PRIMARY, isLoading=false, ...rest }) => {
  return (
    <Container {...rest} style={{backgroundColor: backgroud}}>
      {
        isLoading==true 
        ?
        <ButtonText>
          <ActivityIndicator color={COLORS.WHITE} size={40}/>
        </ButtonText>
        :
        <ButtonText>{children}</ButtonText>
      }
    </Container>
  );
};

export default Button;
