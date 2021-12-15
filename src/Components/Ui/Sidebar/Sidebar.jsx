import React from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Flex,
  Grid,
} from '@chakra-ui/react';

import { TextHoverDrawer } from '../../Shared/SharedComponents';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt="5px" />
            <DrawerHeader>
              <Flex>
                <Image alt="Nucbar Logo" />
              </Flex>
            </DrawerHeader>
            <Grid ml="25px" mt="25px" templateRows="repeat(3)" gap={10} w="50%">
              <TextHoverDrawer children={'Home'} link={'/'} onClose={onClose} />
              <TextHoverDrawer
                children={'Cart'}
                link={'/cart'}
                onClose={onClose}
              />
            </Grid>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
