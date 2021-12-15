import { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text, Button, LinkOverlay } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link as ReachLink } from 'react-router-dom';
import StarsRate from '../StarsRate/StarsRate';
const ListCard = ({ product, index }) => {
  const [show, setShow] = useState(false);
  const setShowEnter = () => {
    setShow(true);
  };
  const setShowLeave = () => {
    setShow(false);
  };

  return (
    <Box
      mb="2px"
      justifyContent="right"
      mr="60px"
      position="relative"
      onMouseEnter={() => setShowEnter()}
      onMouseLeave={() => setShowLeave()}
    >
      <LinkOverlay as={ReachLink} to={`/product/${product.id}`}>
        <Box
          bg="nucba.form"
          w="850px"
          p="20px"
          borderRadius={index === 0 && '5px 5px 0px 0px'}
          lineHeight="19px"
        >
          <Flex>
            <Image
              boxSize="180px"
              objectFit="contain"
              src={
                product
                  ? product.image
                  : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
              }
            />

            <Box position="relative" ml="8%">
              <Text fontSize="23px" fontWeight="100" mb="18px" mt="15px">
                {product?.title}
              </Text>
              {product?.descuento && (
                <Text fontSize="12px" as="s" color="gray.500">
                  ${product?.price}
                </Text>
              )}
              <Flex alignItems="center">
                <Text fontSize="23px" fontWeight="500" mr="10px">
                  $
                  {product && product.descuento
                    ? product?.price * 0.9
                    : product?.price}
                </Text>
                {product?.descuento && (
                  <Text fontSize="13px" color="pink.500" fontWeight="500">
                    10% OFF
                  </Text>
                )}
                <Flex
                  justifyContent="left"
                  w="100%"
                  position="absolute"
                  left="330px"
                >
                  <StarsRate rate={product.rate} />
                </Flex>
              </Flex>
              <Text fontSize="sm" color="gray.500" mt="15px">
                {product && product.shortDescription}
              </Text>
              {product?.freeShipping && (
                <Text
                  fontSize="13px"
                  color="pink.500"
                  fontWeight="700"
                  mt="10px"
                >
                  Envío gratis
                </Text>
              )}
            </Box>
          </Flex>
        </Box>
      </LinkOverlay>
      {show && (
        <Button
          position="absolute"
          m="5px"
          color="nucba.primary"
          _hover={{ color: 'nucba.third' }}
          bg="transparent"
          top="5px"
          left="92%"
        >
          <AiOutlineHeart />
        </Button>
      )}
    </Box>
  );
};

export default ListCard;
