import { Button, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
const MenuButton = ({ onClick, children, open, color }) => {
  const variants = {
    open: { rotate: 180 },
    close: { rotate: 0 },
  };
  return (
    <Button
      bg="none"
      _hover={{ bg: 'none' }}
      _focus={{ outline: 'none' }}
      p={0}
      onClick={() => onClick()}
    >
      {children}
      <motion.div
        variants={variants}
        animate={open ? 'open' : 'close'}
        transition={{ duration: 0.4 }}
      >
        <Box mx="1px">
          <ChevronDownIcon color={color} />
        </Box>
      </motion.div>
    </Button>
  );
};

export default MenuButton;
