import { Flex } from '@chakra-ui/react';
import { BsGear } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HamburgerDash, Backdrop, DashContainer, DashItem } from './Components';

const DashSidebar = ({ url }) => {
  return (
    <>
      <Flex position="absolute" top="80px">
        <DashContainer>
          <HamburgerDash />
          <DashItem
            url={url}
            icon={<BsGear />}
            children="Configuración"
            to="configuration"
          />
          <DashItem
            url={url}
            icon={<IoBagOutline />}
            children="Mis compras"
            to="orders"
          />
          <DashItem
            url={url}
            to="updatepassword"
            children="Cambiar contraseña"
            icon={<RiLockPasswordLine />}
          />
        </DashContainer>
        <Backdrop />
      </Flex>
    </>
  );
};

export default DashSidebar;
