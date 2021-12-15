import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import NavDropDown from './NavDropDown';
const RightBtns = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Flex alignItems="center">
      <NavDropDown />
      <Link to="/cart">
        <Flex mr="10px" mb="8px" position="relative">
          <FiShoppingCart color="#fff" fontSize="20px" />
          <Box
            position="absolute"
            color="nucba.form"
            bottom={{ base: '15px', sm: '15px', md: '16px', lg: '16px' }}
            left="17px"
          >
            <Text fontSize="11px">
              {cart.totals ? cart.totals.quantity : '0'}
            </Text>
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};

export default RightBtns;
