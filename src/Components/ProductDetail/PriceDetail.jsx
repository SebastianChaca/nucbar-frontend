import { Text, Flex } from '@chakra-ui/layout';
import StarsRate from '../StarsRate/StarsRate';

const PriceDetail = ({ product }) => {
  if (!product) {
    return <h1>Producto no disponible</h1>;
  }
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="left"
      alignContent="center"
      flexDir="column"
      w="400px"
    >
      <Text textStyle="pagetitle" mb="10px">
        {product?.name}
      </Text>
      <StarsRate rate={product.rate} />
      <Text textStyle="title" my="10px">
        ${product?.price}
      </Text>
      <Text textStyle="regular" color="nucba.grisUno" mb="10px">
        {product?.description}
      </Text>
    </Flex>
  );
};

export default PriceDetail;
