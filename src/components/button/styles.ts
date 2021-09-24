import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import COLORS from '../../shareds/colors';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${hp(7)}px;
  max-height: 60px;
  margin-top: ${hp(1.5)}px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${COLORS.WHITE};
  font-family: "sans-serif";
`;
