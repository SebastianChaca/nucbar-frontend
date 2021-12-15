import { Text } from '@chakra-ui/layout';
import React from 'react';

import { UserDashCard, UserDashContainer } from '../Components';

const UpdatePassword = () => {
  return (
    <UserDashContainer title="Cambiar contraseña">
      <UserDashCard>
        <Text textStyle="regular">Cambiar contraseña</Text>
      </UserDashCard>
    </UserDashContainer>
  );
};

export default UpdatePassword;
