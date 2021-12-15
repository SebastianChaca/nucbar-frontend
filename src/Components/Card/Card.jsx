import { Box, Text, Flex, Skeleton, LinkOverlay } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';

export const Card = ({
  index,
  showBtn,
  setShowBtn,
  lastElement,
  loading,
  product,
}) => {
  if (loading) {
    return (
      <Skeleton
        startColor="pink.500"
        endColor="orange.500"
        w="230px"
        h="330px"
        bg="#ffffff"
        borderRadius="2px"
        py="10px"
        mr={{ md: '20px', lg: '20px' }}
      />
    );
  }

  return (
    <Flex justifyContent="center" my="20px" position="relative">
      <Box
        w="220px"
        h="340px"
        bg="#ffffff"
        borderRadius="2px"
        py="10px"
        mr={{ md: '20px', lg: '20px' }}
        boxShadow="sm"
        _hover={{ boxShadow: '5px 5px 17px 1px rgba(181,78,159,0.36)' }}
      >
        <LinkOverlay as={ReachLink} to={`/product/${product?.id}`}>
          <ProductImage product={product} boxSize="220px" />

          <hr />
          <Box mt="5px" mb="10px">
            <Text textAlign="center" textStyle="subtitle">
              {product && product.name}
            </Text>
            <Box ml="15px" mt="7px">
              <Flex alignItems="baseline">
                <Text fontSize="16px" fontWeight="500">
                  $
                  {product && product.descuento
                    ? product?.price * 0.9
                    : product?.price}
                </Text>
                {product && product.descuento && (
                  <Text
                    as="s"
                    color="nucba.grisDos"
                    mx="5px"
                    textStyle="captionSemiBold"
                  >
                    ${product && product.price}
                  </Text>
                )}
                {product && product.descuento && (
                  <Text color="nucba.third" textStyle="semiBold">
                    10% Off
                  </Text>
                )}
              </Flex>
              <Text textStyle="regular" color="nucba.grisUno" mt="2px">
                {product && product.shortDescription}
              </Text>
            </Box>
          </Box>
        </LinkOverlay>
      </Box>
      {/* {showBtn && (index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
      {/* {(index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
    </Flex>
  );
};
