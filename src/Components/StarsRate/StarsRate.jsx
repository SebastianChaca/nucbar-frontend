import { Box, Flex } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
const StarsRate = ({ rate }) => {
  return (
    <Flex>
      {[...Array(rate).keys()].map((item, index) => {
        return (
          <Box mx="1px" color="nucba.primary" key={item}>
            <FaStar />
          </Box>
        );
      })}
      {[...Array(5 - rate).keys()].map((item, index) => {
        return (
          <Box mx="1px" color="nucba.primary" key={item}>
            <FaRegStar />
          </Box>
        );
      })}
    </Flex>
  );
};

export default StarsRate;
