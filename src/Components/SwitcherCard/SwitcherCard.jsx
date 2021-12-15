import { Flex, Text } from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/switch';

const SwitcherCard = ({ text, discount }) => {
  return (
    <Flex
      bg="nucba.form"
      w="230px"
      p="12px"
      borderRadius="5px"
      border="1px solid #ddd"
      justifyContent="space-between"
      alignItems="center"
      mb="10px"
    >
      <Text
        mr="10px"
        fontSize="14px"
        fontWeight="500"
        bg={discount && 'nucba.fourth'}
        color={discount && 'nucba.third'}
        borderRadius="5px"
        px="4px"
        py="2px"
      >
        {text}
      </Text>
      <Switch size="sm" />
    </Flex>
  );
};

export default SwitcherCard;
