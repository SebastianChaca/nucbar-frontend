import React from 'react';
import { Text, Button, useToast, Box, Spinner } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

export const GoHome = () => {
  return (
    <Link to="/">
      <Button variant="primary" mt="10px">
        Ir al incio
      </Button>
    </Link>
  );
};

export const TextHover = ({ children, link, mt, display }) => {
  return (
    <Link to={link}>
      <Text
        mt={mt}
        mx="20px"
        display={display}
        fontSize="2xl"
        _hover={{
          color: 'teal.500',
        }}
        color="nucba.form"
      >
        {children}
      </Text>
    </Link>
  );
};
export const TextHoverDrawer = ({ children, link, onClose }) => {
  const history = useHistory();
  return (
    <Button
      variant="unstyled"
      textAlign="left"
      onClick={() => {
        onClose();
        history.push(link);
      }}
    >
      <Text
        mr="40px"
        fontSize="2xl"
        _hover={{
          color: 'teal.500',
        }}
      >
        {children}
      </Text>
    </Button>
  );
};

export const FormBtn = ({ children, isValid, isDirty, isLoading }) => {
  return (
    <Button
      mt={4}
      colorScheme="teal"
      isLoading={isLoading}
      type="submit"
      disabled={!isValid || !isDirty}
      width="full"
      boxShadow="lg"
    >
      {children}
    </Button>
  );
};
export const useCustomToast = () => {
  const toast = useToast();
  const customToast = (status, description) => {
    toast({
      status: status,
      isClosable: true,
      variatn: 'top-accent',
      duration: 3000,
      description: description,
    });
  };

  return [customToast];
};
export const LoadingSpinner = () => {
  return (
    <Box textAlign="center" mt="50px" display="block" h="calc(100vh - 80px)">
      <Text mb="20px">Cargando...</Text>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="teal"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export const ErrorData = ({ children }) => {
  return (
    <Text textAlign="center" fontSize="2xl" mt="30px">
      {children}
    </Text>
  );
};
