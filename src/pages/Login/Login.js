import React from 'react';
import styled from 'styled-components';

function Login() {
  return <Button>hihi</Button>;
}

const Button = styled.span`
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.orange};
`;

export default Login;
