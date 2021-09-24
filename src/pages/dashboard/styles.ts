import React from "react";
import styled from "styled-components/native";
import COLORS from '../../shareds/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface HeaderTextProps{
  color: string;
}

export const Container = styled.View`
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
  align-items: center;
  justify-content: center;
  flex:1;
`;
export const BodyContainer = styled.View`
  width: ${wp('100%')}px;
  background: ${COLORS.PRIMARY};
  flex:1;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const BodyTitle = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 30px;
`;

export const BodyOptions = styled.View`
  flex:1;
  padding: 30px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BodyOptionItem = styled.TouchableOpacity`
  width: ${wp(30)}px;
  max-width: 120px;
  height: ${wp(25)}px;
  max-height: 110px;
  justify-content: center;
  align-items: center;
  background: ${COLORS.WHITE};
  border-radius: 10px;
  margin-left: 3px;
  margin-right: 5px;
  padding: 5px;
`;

export const BodyOptionItemText = styled.Text`
  color: ${COLORS.PRIMARY};
  font-size: 16px;
`;
