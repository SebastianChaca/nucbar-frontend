import React from 'react';
import { Image } from '@chakra-ui/image';
const ProductImage = ({ product, boxSize }) => {
  return (
    <Image
      boxSize={boxSize}
      objectFit="contain"
      src={
        product
          ? product.image
          : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
      }
      mb="5px"
    />
  );
};

export default ProductImage;
