import React from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import COLORS from '../../shareds/colors';

interface HeaderTextProps{
  color: string;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${COLORS.WHITE};
  align-items: center;

`;

export const HeaderContainer = styled.View`
  height: ${hp(10)}px;
  width: ${wp('100%')}px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HeaderText = styled.Text<HeaderTextProps>`
  color: ${(props:HeaderTextProps)=>props.color || COLORS.BLACK};
  font-weight: bold;
  font-size: 20px;
`;

export const AnimationContainer = styled.View`
  width: ${wp('100%')}px;
  height: ${hp(40)}px;
  align-items: center;
  justify-content: center;
  padding-left:10px;
  padding-right:10px;
  flex:1;
`;
export const BodyContainer = styled.View`
  width: ${wp('100%')}px;
  padding-left:10px;
  padding-right:10px;
  flex:1;
`;


