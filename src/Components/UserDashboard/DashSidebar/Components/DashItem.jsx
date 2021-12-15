import React from 'react';
import OpacityDiv from '../../../Transitions/Opacity/OpacityDiv';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashItem = ({ url, children, to, icon }) => {
  const { pathname } = useLocation();
  const { userSidebar } = useSelector(state => state.sidebars);

  return (
    <Box
      borderLeft="5px solid"
      borderColor="transparent"
      _hover={{ borderLeft: '5px solid ', borderColor: 'nucba.primary' }}
      px="25px"
      py="20px"
      maxHeight="70px"
      boxSizing="border-box"
      cursor="pointer"
    >
      <Link to={`${url}/${to}`}>
        <Box fontSize="25px">
          <Flex>
            <Box color={pathname === `${url}/${to}` && 'nucba.third'}>
              {icon}
            </Box>

            <OpacityDiv open={userSidebar}>
              <Text textStyle="regular" ml="10px" mt="3px">
                {children}
              </Text>
            </OpacityDiv>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};

export default DashItem;
