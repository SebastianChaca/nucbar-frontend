import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import QuantityComponent from './QuantityComponent';

const CartCard = ({ product }) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px="40px"
        my="40px"
      >
        <Flex alignItems="center">
          <ProductImage boxSize="120" product={product} />

          <Text textStyle="title" ml="15px">
            {product?.name}
          </Text>
        </Flex>
        <QuantityComponent product={product} />
        <Text textStyle="subtitle">${product?.price}</Text>
      </Flex>
      <hr />
    </>
  );
};

export default CartCard;
