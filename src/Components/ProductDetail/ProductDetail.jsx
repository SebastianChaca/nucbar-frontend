import { Flex } from '@chakra-ui/layout';
import BuyCard from './BuyCard';
import PriceDetail from './PriceDetail';
import ProductImage from '../ProductImage/ProductImage';

const ProductDetail = ({ product }) => {
  return (
    <Flex
      bg="nucba.form"
      p="10"
      m="10"
      borderRadius="8px"
      border="1px solid rgba(0,0,0,0.1)"
      boxShadow="md"
      justifyContent="space-around"
    >
      <ProductImage product={product} boxSize="320px" />
      <PriceDetail product={product} />
      <BuyCard product={product} />
    </Flex>
  );
};

export default ProductDetail;
