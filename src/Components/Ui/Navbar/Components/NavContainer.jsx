import { Flex } from '@chakra-ui/react';

const NavContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      px="20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="nucba.primary"
      h={{ base: '60px', sm: '60px', md: '100%', lg: '100%' }}
    >
      {children}
    </Flex>
  );
};

export default NavContainer;
