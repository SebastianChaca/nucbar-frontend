import { Flex, Text, Box, Button } from '@chakra-ui/react';
import { GoHome } from '../../Components/Shared/SharedComponents';
import { useEffect } from 'react';
import CartCard from '../../Components/CartCard/CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { getTotals } from '../../Redux/Actions/cartActions';
import Totals from './Totals';
import RectangularCard from '../../Components/RectangularCard/RectangularCard';
import { useHistory } from 'react-router-dom';
const ShoppingCart = () => {
  const { cartItems, totals } = useSelector(state => state.cart);
  const { token } = useSelector(state => state.user);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  if (totals?.quantity <= 0) {
    return (
      <Flex w="100%" p="30px" justifyContent="center" h="calc(100vh - 80px)">
        <Box textAlign="center">
          <Text textStyle="title">No hay productos en tu lista</Text>
          <GoHome />
        </Box>
      </Flex>
    );
  }
  return (
    <Flex flexDir="column" alignItems="center">
      <RectangularCard
        flexDir="column"
        posiiton="relative"
        m="auto"
        mt="50px"
        mb="50px"
        w="1300px"
      >
        {cartItems.map(item => {
          return <CartCard product={item} key={item.id} />;
        })}
        <Totals />
      </RectangularCard>
      {token && (
        <Button
          variant="primary"
          w="100px"
          onClick={() => history.push('/checkout')}
        >
          Comprar
        </Button>
      )}
    </Flex>
  );
};

export default ShoppingCart;
