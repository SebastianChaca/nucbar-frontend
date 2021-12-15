import { useEffect, useRef } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useFetch from '../../Hooks/useFetch';
import { url } from '../../Utils/apiUrl';
import { useHistory } from 'react-router-dom';
import { LoadingSpinner } from '../../Components/Shared/SharedComponents';
const Checkout = () => {
  const history = useHistory();
  const { cartItems } = useSelector(state => state.cart);
  const { loading, response, fetchData } = useFetch();
  const ref = useRef();
  let mp = cartItems.map(item => {
    const unit_price = item.price;
    const title = item.name;
    return { unit_price, title, quantity: item.quantity };
  });

  const handleClick = () => {
    fetchData('post', `${url}/checkout/mercadopago`, null, { data: mp });
  };
  useEffect(() => {
    if (response) {
      window.location.href = response?.data?.response?.response?.init_point;
    }
  }, [response, history]);
  useEffect(() => {
    if (ref) {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  });
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div ref={ref}></div>
      <Flex h="calc(100vh - 80px)" justifyContent={'center'}>
        <Button variant="primary" mt="50px" onClick={() => handleClick()}>
          Mercado Pago
        </Button>
      </Flex>
    </>
  );
};

export default Checkout;
