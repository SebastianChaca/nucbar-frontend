import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Banner from '../../Components/Banner/Banner';
import OrderByDropDown from '../../Components/OrderByDropDown/OrderByDropDown';
import { Flex, Box } from '@chakra-ui/react';
import SwitcherCard from '../../Components/SwitcherCard/SwitcherCard';
import ProductsList from './ProductsList';
import useFetch from '../../Hooks/useFetch';
import { url } from '../../Utils/apiUrl';
import { getProductsStats } from '../../Redux/Actions/statsActions';
import Brands from './Brands';
import { cleanQuery } from '../../Utils/cleanQuery';
import BreadCrumb from './BreadCrumb';

const Products = () => {
  const { search } = useLocation();
  const { loading, fetchData } = useFetch();
  const { category } = useParams();
  const ref = useRef();
  const clean = cleanQuery(search);

  useEffect(() => {
    fetchData(
      'get',
      `${url}/products/products-stats?category=${clean[0]}`,
      getProductsStats
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  });

  const items = ['Bebidas Alcoholicas', 'Whiskys'];
  return (
    <>
      <div ref={ref}></div>
      <Banner category={category} />
      <Box p="15px 25px 10px 25px">
        <Flex alignItems="center" justifyContent="space-between" mb="20px">
          <BreadCrumb items={items} />
          <OrderByDropDown />
        </Flex>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box ml="10px">
            <SwitcherCard text={'Envío gratis'} />
            <SwitcherCard text={'Desde 10% OFF'} discount />
            <Box mt="25px">
              <Brands loading={loading} />
            </Box>
          </Box>
          <ProductsList />
        </Flex>
      </Box>
    </>
  );
};

export default Products;
