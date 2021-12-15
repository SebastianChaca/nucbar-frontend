import {
  Text,
  Box,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';

const InputMenuItem = ({ handleSubmit, handleClose, product }) => {
  const [inputMode, setInputMode] = useState(false);
  const [applyValue, setApplyValue] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = e => {
    setError(null);
    setApplyValue(e.target.value);
  };
  const submit = () => {
    if (applyValue > product.stock) {
      setError(true);
      return;
    }
    handleSubmit(applyValue);
    handleClose();
  };

  if (inputMode) {
    return (
      <Box
        p="20px"
        borderLeft="2px"
        borderColor="nucba.primary"
        _hover={{ bg: 'nucba.grisTres' }}
      >
        <Text textStyle="captionRegular" color="nucba.grisDos" m="5px">
          Cantidad:
        </Text>
        <InputGroup>
          <Input
            border="1px"
            h="50px"
            onChange={e => handleChange(e)}
            type="number"
            bg="nucba.form"
            focusBorderColor="nucba.primary"
            isInvalid={error}
          />
          <InputRightElement m="5px" w="55px" value={applyValue}>
            <Button
              h="25px"
              type="submit"
              isDisabled={!applyValue || error}
              bg={applyValue ? 'nucba.primary' : 'nucba.grisTres'}
              color={applyValue && 'nucba.form'}
              onClick={() => submit()}
              _hover={{ bg: 'nucba.hover' }}
            >
              <Text
                fontSize="10px"
                color={applyValue ? 'nucba.form' : 'nucba.grisUno'}
                m="10px"
              >
                Aplicar
              </Text>
            </Button>
          </InputRightElement>
        </InputGroup>
        {error && (
          <Flex color="nucba.error" alignItems="center" mt="5px">
            <AiFillExclamationCircle />
            <Text textStyle="captionRegular" ml="3px">
              Sin Stock
            </Text>
          </Flex>
        )}
      </Box>
    );
  }
  return (
    <Button
      onClick={() => setInputMode(true)}
      p={0}
      borderRadius="0px"
      bg="none"
    >
      <Text textStyle="regular" w="100%" h="40px" p="10px">
        Mas de 6 unidades
      </Text>
    </Button>
  );
};

export default InputMenuItem;
