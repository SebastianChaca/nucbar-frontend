import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const DashContainer = ({ children }) => {
  const { userSidebar } = useSelector(state => state.sidebars);

  const motionVariants = {
    open: {
      width: '200px',
      position: 'absolute',
    },
    close: {
      width: '100px',
      position: 'absolute',
      transition: {
        delay: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={motionVariants}
      initial={false}
      animate={userSidebar ? 'open' : 'close'}
    >
      <Flex
        bg="nucba.form"
        w="100%"
        flexDir="column"
        alignItems="left"
        h="calc(100vh - 80px)"
        position="relative"
        zIndex={100}
        boxShadow={userSidebar && '9px 0px 8px -7px rgba(0, 0, 0, 0.5)'}
      >
        {children}
      </Flex>
    </motion.div>
  );
};

export default DashContainer;
