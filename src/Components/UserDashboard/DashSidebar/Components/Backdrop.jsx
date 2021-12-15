import React from 'react';
import { Box } from '@chakra-ui/react';
import OpacityDiv from '../../../Transitions/Opacity/OpacityDiv';
import { useSelector, useDispatch } from 'react-redux';
import { handleUserSidebar } from '../../../../Redux/Actions/sidebarActions';
const Backdrop = () => {
  const { userSidebar } = useSelector(state => state.sidebars);
  const dispatch = useDispatch();
  return (
    <OpacityDiv open={userSidebar}>
      <Box
        w="100vw"
        h="calc(100vh - 80px)"
        bg="rgba(0, 0, 0, 0.4)"
        boxShadow="inset 0 0 5px rgba(0, 0, 0, 0.5)"
        onClick={() => dispatch(handleUserSidebar())}
      />
    </OpacityDiv>
  );
};

export default Backdrop;
