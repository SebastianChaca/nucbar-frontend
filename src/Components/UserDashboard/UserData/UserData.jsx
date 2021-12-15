import React from 'react';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { UserDashContainer, UserDashCard } from '../Components';

const UserData = ({ url }) => {
  const user = useSelector(state => state.user);

  return (
    <UserDashContainer title="Mis datos">
      <UserDashCard to={`${url}/updatename`}>
        <Text textStyle="regular">Usuario</Text>
        <Text textStyle="regular" color="nucba.grisMeli">
          {user?.currentUser?.name}
        </Text>
      </UserDashCard>

      <hr />

      <UserDashCard to={`${url}/updatemail`}>
        <Text textStyle="regular">E-mail</Text>
        <Text textStyle="regular" color="nucba.grisMeli">
          {user?.currentUser?.email}
        </Text>
      </UserDashCard>
    </UserDashContainer>
  );
};

export default UserData;
