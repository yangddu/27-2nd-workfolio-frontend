import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Nav() {
  return (
    <NavBar>
      <NavBarContainer>
        <NavLogo>
          <Link to="/">
            <LogoImg src="/images/logo.svg" alt="워크 폴리오" />
          </Link>
        </NavLogo>

        <Menu>
          <MenuContainer>
            <Button>
              <MenuButtonImg
                src="/images/location.svg"
                alt="어디서 일할까요?"
              />
              <DestinationText>어디서 일할까요?</DestinationText>
            </Button>
            <Button>
              <MenuButtonImg
                src="/images/calendar.svg"
                alt="언제 시작할까요?"
              />
              <CalendarText>언제 시작할까요?</CalendarText>
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
  margin: ${({ theme }) => theme.marginCenter};
  ${borderBottom}
  background-color: ${({ theme }) => theme.colorWhite};
`;

const NavBarContainer = styled.div`
  height: 75px;
  ${({ theme }) => theme.flex('row', 'center', 'space-between')};
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
  margin-left: 350px;
  padding-right: 150px;
`;

const MenuButtonImg = styled.img`
  display: block;
  width: 25px;
  height: 25px;
  padding-top: 45px;
  margin: 0 10px 10px 0px;
  cursor: pointer;
`;

const DestinationText = styled.p`
  height: 75px;
  margin: 50px 5px 0 0;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  color: ${({ theme }) => theme.colorBlack};

  &::after {
    content: '|';
    margin-left: 40px;
    padding: 5px;
    color: ${({ theme }) => theme.colorGray};
  }
`;

const CalendarText = styled.p`
  height: 75px;
  margin: 50px 10px 0 5px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  color: ${({ theme }) => theme.colorBlack};
`;

const DetailMenu = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 230px;
  display: flex;
  padding-top: 7px;
  cursor: pointer;
`;

const Text = styled.p`
  width: auto;
  min-width: 130px;
  font-weight: ${({ theme }) => theme.weightBold};
  color: ${({ theme }) => theme.colorBlack};
`;

const LogInContainer = styled.div`
  display: flex;

  &::before {
    content: '|';
    margin: 3px 20px 0 0;
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
  width: auto;
  min-width: 350px;
  padding-top: 3px;
  font-weight: ${({ theme }) => theme.weightBold};
  color: ${({ theme }) => theme.colorBlack};
`;

export default Nav;
