import { Flex, Text } from '@chakra-ui/react';

import React from 'react';
import RectangularCard from '../../RectangularCard/RectangularCard';

const UserDashContainer = ({ title, children }) => {
  return (
    <Flex flexDir="column" alignItems="left" m="auto" w="70%" p="50px">
      <Text textStyle="title" mb="20px">
        {title}
      </Text>
      <RectangularCard w="700px" alignItems="center">
        {children}
      </RectangularCard>
    </Flex>
  );
};

export default UserDashContainer;
