import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router';

const MenuItem = ({ children, onClick, bg, to }) => {
  const history = useHistory();
  return (
    <Button
      onClick={() => (onClick ? onClick() : to ? history.push(to) : null)}
      p={0}
      bg={bg}
      borderRadius="0px"
    >
      {children}
    </Button>
  );
};

export default MenuItem;
