import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Landing: FC = () => {
  const history = useHistory();

  const handleNavigate = () => history.push({ pathname: '/home' });

  return <Container>
    <button onClick={handleNavigate} color="red">Go Home</button>
  </Container>;
};
