import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import ListCard from '../../Components/ListCard/ListCard';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import {
  GoHome,
  LoadingSpinner,
} from '../../Components/Shared/SharedComponents';

const ProductsList = () => {
  const { search } = useLocation();
  const { products } = useSelector(state => state.products);
  const { loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData('get', `${url}/products${search}`, fetchProducts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (loading) {
    return (
      <Flex justifyContent="center" w="100%">
        <LoadingSpinner />
      </Flex>
    );
  }

  if (!products) {
    return (
      <Box textAlign="center" m="0 auto">
        <Text textStyle="title">No hay productos</Text>
        <GoHome />
      </Box>
    );
  }
  return (
    <Box>
      {products &&
        products?.data?.products.map((product, index) => {
          return <ListCard product={product} index={index} key={product.id} />;
        })}
    </Box>
  );
};
export default ProductsList;
