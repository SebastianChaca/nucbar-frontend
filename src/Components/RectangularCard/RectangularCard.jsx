import { Box } from '@chakra-ui/react';
const RectangularCard = ({ children, ...other }) => {
  return (
    <Box
      bg="nucba.form"
      borderRadius="8px"
      border="1px solid"
      borderColor="nucba.border"
      boxShadow="md"
      {...other}
    >
      {children}
    </Box>
  );
};

export default RectangularCard;
