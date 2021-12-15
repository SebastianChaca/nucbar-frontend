import { Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LogBtn = ({ display }) => {
  return (
    <Link to="/login">
      <Button
        color="nucba.form"
        pb="4px"
        display={display}
        variant="link"
        mr="15px"
        mt="2px"
        _focus={{ outline: 'none' }}
      >
        <Text> Ingresá</Text>
      </Button>
    </Link>
  );
};

export default LogBtn;
