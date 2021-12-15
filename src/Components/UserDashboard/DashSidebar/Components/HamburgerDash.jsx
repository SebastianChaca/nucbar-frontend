import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import OpacityDiv from '../../../Transitions/Opacity/OpacityDiv';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { handleUserSidebar } from '../../../../Redux/Actions/sidebarActions';
const HamburgerDash = () => {
  const { userSidebar } = useSelector(state => state.sidebars);
  const dispatch = useDispatch();
  const buttonVariants = {
    open: { rotate: 180 },
    close: { rotate: 0 },
  };
  return (
    <Flex alignItems="start" px="30px" pt="50px">
      <Box
        fontSize="25px"
        w="20px"
        h="20px"
        mt="2px"
        mb="40px"
        cursor="pointer"
        color="nucba.primary"
        onClick={() => dispatch(handleUserSidebar())}
      >
        <motion.div
          variants={buttonVariants}
          animate={userSidebar ? 'open' : 'close'}
        >
          {userSidebar ? <GrClose /> : <GiHamburgerMenu />}
        </motion.div>
      </Box>
      <OpacityDiv open={userSidebar}>
        <Text textStyle="subtitle" color="black" ml="10px">
          Mi Cuenta
        </Text>
      </OpacityDiv>
    </Flex>
  );
};

export default HamburgerDash;
