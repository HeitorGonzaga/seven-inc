import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { TextInputProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Container, InputField, Icon } from './styles';
import COLORS from '../../shareds/colors';

interface InputPropos extends TextInputProps {
  evento?: {():void};
  possuiEvento?: boolean;
  iconEvento?: string;
}

interface InputRef {
  focus(): void;
}

/*
* Component Input
*/

const Input: React.ForwardRefRenderFunction<InputRef, InputPropos> = (
  { evento, possuiEvento=false, iconEvento, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }),[inputElementRef]);

  const _handleInputFocus = () => {
    setIsFocused(true);
  };

  const _hanleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!rest.value);
  };

  return (
    <Container isFocused={isFocused} lines={rest.numberOfLines}>
      
      <InputField
        ref={inputElementRef}
        placeholderTextColor={COLORS.PLACEHOLDER}
        {...rest}
        onFocus={_handleInputFocus}
        onBlur={_hanleInputBlur}
      />
      {
        possuiEvento==true?<TouchableOpacity onPress={()=>evento()}><Icon name={iconEvento} size={20} color={COLORS.PRIMARY} /></TouchableOpacity>:null
      }
    </Container>
  );
};

export default forwardRef(Input);
