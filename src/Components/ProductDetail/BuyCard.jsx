import { useState } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../Redux/Actions/cartActions';
import { useHistory } from 'react-router-dom';

import DropDown from './StockDropDownComponents/DropDown';
function BuyCard({ product }) {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCart = () => {
    dispatch(setItems(product, parseInt(value)));
    history.push('/cart');
  };
  if (!product) {
    return <h1>Productos no disponibles</h1>;
  }
  return (
    <Box
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius="8px"
      p="25px 26px"
      lineHeight="40px"
      w="300px"
    >
      {product.stock > 0 && <Text textStyle="semiBold">Stock disponibe </Text>}

      <Flex width="400px">
        <Flex alignItems="start">
          <Text mr="5px">Cantidad:</Text>
          <DropDown product={product} value={value} setValue={setValue} />
        </Flex>
        <Text color="nucba.grisDos" fontSize="12px" ml="3px">
          ({product.stock} disponibles )
        </Text>
      </Flex>

      <Flex flexDir="column" mt="25px">
        <Button
          variant="primary"
          textStyle="title"
          p="0px 24px"
          h="48px"
          my="10px"
        >
          Comprar ahora
        </Button>
        <Button
          bg="nucba.fourth"
          color="nucba.primary"
          textStyle="title"
          p="0px 24px"
          h="48px"
          onClick={handleCart}
        >
          Agregar al carrito
        </Button>
      </Flex>
    </Box>
  );
}

export default BuyCard;
