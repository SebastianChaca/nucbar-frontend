import { Flex, Text, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useDropDown from '../../Hooks/useDropDown';
import usePrevious from '../../Hooks/usePrevious';
import { Menu, MenuButton, Menuitem, MenuItemGroup } from '../DropDown';

const OrderByDropDown = () => {
  const { open, handleOpen, ref } = useDropDown();
  const history = useHistory();
  const { search } = useLocation();
  const [select, setSelect] = useState(null);
  const prevSelect = usePrevious(select);

  useEffect(() => {
    let filterType = select === 'Menor precio' ? 'price' : '-price';
    let replaceSelect = prevSelect === 'Menor precio' ? 'price' : '-price';
    let filterQuery = search.replace(`&sort=${replaceSelect}`, '');
    if (select) {
      history.push({
        pathname: 'products',
        search: `${filterQuery}&sort=${filterType}`,
      });
    }
  }, [select]);
  return (
    <Flex alignItems="center" mr="45px">
      <Text fontWeight="500"></Text>
      <Box ref={ref}>
        <Menu>
          <MenuButton
            onClick={() => handleOpen()}
            open={open}
            color="nucba.primary"
          >
            <Text textStyle="regular" mr="5px">
              Ordernar por
            </Text>
            <Text textStyle="bodySemibold">{select}</Text>
          </MenuButton>

          <MenuItemGroup w="200px" open={open}>
            <Menuitem
              onClick={e => {
                setSelect('Mayor precio');
                handleOpen();
              }}
            >
              Mayor precio
            </Menuitem>
            <Menuitem
              onClick={() => {
                setSelect('Menor precio');
                handleOpen();
              }}
            >
              Menor precio
            </Menuitem>
          </MenuItemGroup>
        </Menu>
      </Box>
    </Flex>
  );
};
export default OrderByDropDown;
