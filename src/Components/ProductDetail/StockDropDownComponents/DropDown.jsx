import { Text, Box } from '@chakra-ui/react';
import InputMenuItem from './InputMenuItem';
import { Menu, MenuButton, Menuitem, MenuItemGroup } from '../../DropDown';
import useDropDown from '../../../Hooks/useDropDown';

const DropDown = ({ product, value, setValue }) => {
  const { open, handleOpen, ref } = useDropDown();
  const handleClick = value => {
    setValue(value);
    handleOpen();
  };

  const handleSubmit = applyValue => {
    setValue(applyValue);
  };

  return (
    <Box ref={ref}>
      <Menu>
        <MenuButton
          onClick={() => handleOpen()}
          open={open}
          color="nucba.primary"
        >
          <Text textStyle="semiBold">
            {value}
            {value > 1 ? ' unidades' : ' unidad'}
          </Text>
        </MenuButton>

        <MenuItemGroup w="200px" open={open}>
          {[...Array(product.stock).keys()].map((item, index) => {
            const producto = item + 1;
            if (producto === 6) {
              return (
                <InputMenuItem
                  handleSubmit={handleSubmit}
                  handleClose={handleOpen}
                  product={product}
                />
              );
            }
            if (producto > 6) {
              return null;
            }
            return (
              <Menuitem
                onClick={() => handleClick(producto)}
                bg={producto === value && 'nucba.fourth'}
              >
                <Text
                  borderLeft={producto === value && '2px'}
                  w="100%"
                  h="40px"
                  p="10px"
                  textStyle={producto === value ? 'semiBold' : 'regular'}
                  color={producto === value && 'nucba.primary'}
                >
                  {producto}
                  {producto > 1 ? ' unidades' : ' unidad'}
                </Text>
              </Menuitem>
            );
          })}
        </MenuItemGroup>
      </Menu>
    </Box>
  );
};

export default DropDown;
