import React from "react";

import styled, { css } from "styled-components/native";

import Ionicons from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../shareds/colors';

interface ContainerProps {
  isFocused: boolean;
  lines: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${hp(7)}px;
  max-height: 60px;
  background: ${COLORS.WHITE};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${COLORS.PLACEHOLDER};
  margin-top: 8px;
  flex-direction: row;
  padding: 0 16px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${COLORS.PRIMARY};
    `};
  ${(props) =>
    props.lines &&
    css`
      height: ${30 * props.lines}px;
      text-align-vertical: top;
    `}
`;

export const InputField = styled.TextInput`
  flex: 1;
  border-radius: 8px;
  font-family: "sans-serif";
  color: ${COLORS.PRIMARY};
`;

export const Icon = styled(Ionicons)`
  margin-right: 16px;
`;
