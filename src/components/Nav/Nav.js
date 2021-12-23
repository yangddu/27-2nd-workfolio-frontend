import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Nav() {
  return (
    <NavBar>
      <NavBarContainer>
        <NavLogo>
          <Link to="/main">
            <LogoImg src="/images/logo.svg" alt="워크 폴리오" />
          </Link>
        </NavLogo>

        <Menu>
          <MenuContainer>
            <Button>
              <MenuButtonImg
                src="/images/location.svg"
                alt="어디로 떠날까요?"
              />
              <DestinationText>어디로 떠날까요?</DestinationText>
            </Button>
            <Button>
              <MenuButtonImg src="/images/calendar.svg" alt="언제 떠날까요?" />
              <CalendarText>언제 떠날까요?</CalendarText>
            </Button>
          </MenuContainer>

          <DetailMenu>
            <Link to="/list-page">
              <Text> FIND OFFICE </Text>
            </Link>
            <Link to="/list-page">
              <Text> PRE-ORDER</Text>
            </Link>
          </DetailMenu>

          <LogInContainer>
            <Link to="/my-page">
              <MyPage src="/images/person.svg" alt="마이 페이지" />
            </Link>
            <Link to="/login">
              <LoginText>LOGIN</LoginText>
            </Link>
          </LogInContainer>
        </Menu>
      </NavBarContainer>
    </NavBar>
  );
}

const borderBottom = props => css`
  border-bottom: 1px solid ${({ theme }) => theme.colorLightGray};
`;

const NavBar = styled.div`
  padding: 0 60px;
  ${borderBottom}
  background-color: ${({ theme }) => theme.colorWhite};
`;

const NavBarContainer = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'space-between')};
  height: 75px;
`;

const NavLogo = styled.div`
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: auto;
  height: 200px;
  padding-top: 5px;
`;

const Menu = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'space-between')};
`;

const MenuContainer = styled.div`
  display: flex;
  margin-right: 200px;
`;

const MenuButtonImg = styled.img`
  display: block;
  width: 25px;
  height: 25px;
  padding-right: 5px;
  margin-left: 30px;
  cursor: pointer;
`;

const DestinationText = styled.p`
  padding: 5px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  color: ${({ theme }) => theme.colorBlack};

  &::after {
    content: '|';
    margin-left: 25px;
    color: ${({ theme }) => theme.colorGray};
  }
`;

const CalendarText = styled.p`
  padding: 5px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  color: ${({ theme }) => theme.colorBlack};
`;

const DetailMenu = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
`;

const Text = styled.p`
  padding-right: 30px;
  font-weight: ${({ theme }) => theme.weightBold};
  color: ${({ theme }) => theme.colorBlack};
`;

const LogInContainer = styled.div`
  display: flex;
  padding: 0 60px 3px 0;

  &::before {
    content: '|';
    margin-left: 5px;
    color: ${({ theme }) => theme.colorGray};
  }
`;

const MyPage = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 15px 0 35px;
`;

const LoginText = styled.p`
  padding-top: 3px;
  font-weight: ${({ theme }) => theme.weightBold};
  color: ${({ theme }) => theme.colorBlack};
`;

export default Nav;
