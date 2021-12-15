import { Flex, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
const UserDashCard = ({ children, to }) => {
  const history = useHistory();
  return (
    <Box
      cursor="pointer"
      position="relative"
      zIndex={1000}
      onClick={() => {
        history.push(to);
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" p="15px">
        {children}
        <ChevronRightIcon color="nucba.primary" fontSize="22px" />
      </Flex>
    </Box>
  );
};

export default UserDashCard;
