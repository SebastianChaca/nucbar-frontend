import { Text, Flex } from '@chakra-ui/layout';

export const CartTotal = ({ total }) => {
  return (
    <Flex width="100%" justifyContent="right" mt="10px" p="20px">
      <Text textStyle="subtitle" mr="20px">
        Total : ${total}
      </Text>
    </Flex>
  );
};

export default CartTotal;
