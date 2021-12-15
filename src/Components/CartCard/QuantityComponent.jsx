import { Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../Redux/Actions/cartActions';
const QuantityComponent = ({ product }) => {
  const dispatch = useDispatch();

  const handleSumItem = () => {
    dispatch(addItem(product.id));
  };
  const handleMinusItem = () => {
    dispatch(removeItem(product.id));
  };

  const Btn = ({ children, onClick }) => {
    return (
      <Button
        color="nucba.fourth"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        _active={{
          bg: 'transparent',
          color: 'nucba.primary',
          transform: 'scale(1.1)',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        onClick={() => onClick()}
        p={0}
        m={0}
      >
        {children}
      </Button>
    );
  };

  return (
    <Flex
      borderRadius="8px"
      border="1px solid"
      borderColor="nucba.border"
      justifyContent="space-between"
      alignItems="center"
      width="120px"
      h="40px"
      px="15px"
    >
      <Btn onClick={handleMinusItem}>
        <BiMinus fontSize="20px" />
      </Btn>

      <Text textStyle="regular">{product.quantity}</Text>

      <Btn onClick={handleSumItem}>
        <BsPlus fontSize="20px" />
      </Btn>
    </Flex>
  );
};

export default QuantityComponent;
