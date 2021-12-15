import React, { useState } from 'react';
import InputCustom from '../../Components/Shared/Input';
import useForm from '../../Hooks/useForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from '../../Utils/validator';
import { url } from '../../Utils/apiUrl';
import { LoginForm, RegisterForm } from '../../Utils/initialForms';
import { Box, Button, Text } from '@chakra-ui/react';
import { LinkText, FormContainer } from '../../Components/Login';
import useFetch from '../../Hooks/useFetch';

import { setCurrentUser } from '../../Redux/Actions/userActions';

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(LoginForm, false);
  const {
    inputs: { email, password, name },
  } = formState;

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { response, error, loading, fetchData } = useFetch();

  const handleFormMode = () => {
    if (loginMode) {
      setFormData(RegisterForm(formState.inputs), false);
    } else {
      setFormData(LoginForm, email?.isValid && password?.isValid);
    }
    setLoginMode(!loginMode);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (loginMode) {
      fetchData('post', `${url}/auth/login`, setCurrentUser, {
        email: email.value,
        password: password.value,
      });
    } else {
      fetchData('post', `${url}/auth/signup`, setCurrentUser, {
        name: name.value,
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <>
      <FormContainer>
        {!response && error && (
          <Box textAlign="center" m="0px">
            <Text textStyle="captionRegular" m="0px" color="red">
              {error}
            </Text>
          </Box>
        )}
        {!loginMode && (
          <InputCustom
            type="text"
            id="name"
            label="Nombre"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(10)]}
          />
        )}
        <InputCustom
          type="text"
          id="email"
          label="E-mail"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL(email.value)]}
          showPassword={showPassword}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <InputCustom
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(10)]}
          handlePasswordVisibility={handlePasswordVisibility}
          showPassword={showPassword}
        />

        <Button
          variant="primary"
          mt="25px"
          isFullWidth
          color="#ffff"
          disabled={!formState.isValid}
          onClick={handleSubmit}
          isLoading={loading}
        >
          {loginMode ? 'Inicia sesión' : 'Registrate'}
        </Button>
      </FormContainer>
      <LinkText loginMode={loginMode} handleMode={handleFormMode} />
    </>
  );
};
export default Login;
