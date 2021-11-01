import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useMainContext } from '../context/ContextProvider';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Login: FC = () => {

  const mainStore = useMainContext();
  const history = useHistory();

  const handleLogin = async () => {
    await mainStore.doLogin();
    history.push('/home');
  };

  return <Container>
    <button onClick={handleLogin} color="red">Login</button>
  </Container>;
};
