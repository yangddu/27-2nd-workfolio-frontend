import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FOOTER_DATA_1, FOOTER_DATA_2 } from './FooterData';
import '/images/logo.svg';

const Footer = props => (
  <FooterContainer>
    <FooterWrapper>
      <Link to="/">S T A Y F O L I O</Link>

      <FooterInfo>
        <Ul1>
          {FOOTER_DATA_1.map(data => {
            return <List key={data.id}>{data.value}</List>;
          })}
        </Ul1>
        <Ul2>
          {FOOTER_DATA_2.map(data => {
            return <List key={data.id}>{data.value}</List>;
          })}
        </Ul2>
      </FooterInfo>
    </FooterWrapper>
  </FooterContainer>
);
export default Footer;

const FooterContainer = styled.div`
  width: auto;
  height: 1745px;
`;

const FooterWrapper = styled.div`
  padding-top: 25px;
  color: ${({ theme }) => theme.colorBlack};
  background-color: ${({ theme }) => theme.colorLightGray};

  & a {
    padding: 50px;
    color: ${({ theme }) => theme.colorBlack};
  }
`;

const FooterInfo = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'space-between')};
`;

const Ul1 = styled.ul`
  width: auto;
  padding-left: 50px;
`;

const Ul2 = styled.ul`
  width: auto;
  margin-bottom: 20px;
  padding-right: 50px;
`;

const List = styled.li`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSmall};
`;
