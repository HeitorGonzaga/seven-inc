import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from '../../shareds/colors';

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  width: ${wp('100%')}px;
  height: ${hp('100%')}px;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding-left: ${wp(2)}px;
  padding-right: ${wp(2)}px;
  padding-top: ${hp(2)}px;
  
`;

export const Modal = styled.View`
  width: ${wp('80%')}px;
  height: ${hp('55%')}px;
  background: ${COLORS.WHITE};
  border-radius: 25px;
  padding:25px;
  justify-content: space-between;
  elevation:5;
`;
export const ModalContainer = styled.View``;

export const ModalContainerTitle = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ModalContainerAnimation = styled.View`
  height: ${hp('25%')}px;
  justify-content: center;
  align-items: center;
`;

export const ModalContainerInfo = styled.View`
  height: ${hp('10%')}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color:${COLORS.BLACK};
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  color: ${COLORS.BLACK};
  text-align: center;
  font-size: 16px;
`;

export const IconMenu = styled(Ionicons)``;
