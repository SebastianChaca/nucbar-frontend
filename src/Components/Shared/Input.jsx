import React, { useReducer, useEffect } from 'react';
import { validate } from '../../Utils/validator';
import {
  FormErrorMessage,
  FormLabel,
  Input,
  FormControl,
  InputRightElement,
  Button,
  InputGroup,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
const CHANGE = 'CHANGE';
const TOUCHE = 'TOUCHE';

export const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        validate: validate(action.val, action.validator),
      };

    case TOUCHE:
      return {
        ...state,
        isTouche: true,
      };

    default:
      return state;
  }
};
export const InputCustom = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouche: false,
    validate: {
      isValid: props.initialValid || false,
      msgErr: null,
    },
  });

  const { validate, value } = inputState;
  const { isValid, msgErr } = validate;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = e => {
    dispatch({
      type: CHANGE,
      val: e.target.value,
      validator: props.validators,
    });
  };

  const toucheHandler = () => {
    dispatch({
      type: TOUCHE,
    });
  };

  return (
    <div>
      <FormControl isInvalid={!isValid} mt="10px">
        <FormLabel> {props.label}</FormLabel>
        <InputGroup>
          <Input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={toucheHandler}
            value={inputState.value}
            isInvalid={!isValid && inputState.isTouche}
          />
          {(props.id === 'password' || props.id === 'confirmPassword') && (
            <InputRightElement width="3rem">
              <Button
                h="1.5rem"
                size="sm"
                mr="25px"
                onClick={props.handlePasswordVisibility}
              >
                {props.showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        {!isValid && inputState.isTouche && (
          <FormErrorMessage mb="5px">{msgErr}</FormErrorMessage>
        )}
      </FormControl>
    </div>
  );
};
export default InputCustom;
