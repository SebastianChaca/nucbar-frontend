import { Flex } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React from 'react';

const MenuItemGroup = ({ children, ref, w, open }) => {
  const motionVariants = {
    enter: {
      visibility: 'visible',
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      transitionEnd: {
        visibility: 'hidden',
      },
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.1,
        easings: 'easeOut',
      },
    },
  };
  return (
    <motion.div
      variants={motionVariants}
      initial={false}
      animate={open ? 'enter' : 'exit'}
    >
      <Flex
        w={w}
        boxShadow="lg"
        borderRadius="5px"
        position="absolute"
        top="50px"
        right="-10px"
        border="1px"
        borderColor="nucba.grisTres"
        zIndex={2000}
        bg="nucba.form"
        flexDir="column"
      >
        {children}
      </Flex>
    </motion.div>
  );
};

export default MenuItemGroup;
