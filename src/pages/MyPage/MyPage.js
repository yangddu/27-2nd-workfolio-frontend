import React from 'react';
import styled from 'styled-components';

function MyPage() {
  return (
    <div>
      <SubTitle>
        <Title>MY PAGE</Title>
        <Text>마이 페이지</Text>
      </SubTitle>
      <MyPageWrap>
        <MyInfo>양주영님 반가워요!</MyInfo>
        <MyCount>스테이폴리오와 함께 0번의 여행을 했어요</MyCount>
        <MyConWrap>
          <MyMenu>
            <MenuBox>
              <MenuTit>My Stay</MenuTit>
              <InfoTit>예약 정보</InfoTit>
            </MenuBox>
          </MyMenu>
          <MyContent>
            <StayWrap>
              <StayConWrap>
                <StayBox>
                  <Name>맹그로브 신설</Name>
                  <Stay>
                    <Location>서울/마포구</Location>
                    <Capacity>최소 1명 / 최대 3명</Capacity>
                    <Price>209,000 ~ 594,000</Price>
                  </Stay>
                  <Button>예약하기</Button>
                </StayBox>
                <StayWrapImg />
              </StayConWrap>
              <StayConWrap>
                <StayBox>
                  <Name>맹그로브 신설</Name>
                  <Stay>
                    <Location>서울/마포구</Location>
                    <Capacity>최소 1명 / 최대 3명</Capacity>
                    <Price>209,000 ~ 594,000</Price>
                  </Stay>
                  <Button>예약하기</Button>
                </StayBox>
              </StayConWrap>
            </StayWrap>
          </MyContent>
        </MyConWrap>
      </MyPageWrap>
    </div>
  );
}

export default MyPage;

const SubTitle = styled.div`
  max-width: 1330px;
  height: 200px;
  margin: 0 auto;
  padding: 140px 20px 0 20px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.weightBold};
  letter-spacing: 14px;
  text-indent: 14px;
`;

const Text = styled.div`
  margin: 10px 0 0;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  line-height: 28px;
`;

const MyPageWrap = styled.div`
  max-width: 1100px;
  margin: -15px auto 0;
  text-align: center;
`;

const MyInfo = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
`;

const MyCount = styled.div`
  margin: 0 0 60px;
  padding: 0 0 80px;
  font-size: 18px;
  color: #999;
  margin: 20px 0 80px;
  border-bottom: 3px solid #000;
`;

const MyConWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const MyMenu = styled.div`
  width: 25%;
  height: 400px;
`;

const MenuBox = styled.div`
  font-size: 14px;
  line-height: 38px;
  text-align: left;
`;

const MenuTit = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.weightSemiBold};
`;

const InfoTit = styled.div`
  font-size: 18px;
`;

const MyContent = styled.div`
  display: flex;
  width: 75%;
  margin-top: 170px;
  padding: 20px 0 0;
  /* background: red; */
`;

const StayWrap = styled.div`
  width: 100%;
`;

const StayConWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  /* background: red; */
`;

const StayBox = styled.div`
  width: 100%;
  margin-bottom: 80px;
  text-align: left;
`;

const Stay = styled.div`
  margin: 8px 0 40px;
  line-height: 1.5;
`;

const Name = styled.div`
  width: 48%;
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 100%;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  letter-spacing: -0.5px;
`;

const Location = styled.div`
  font-size: 16px;
`;

const Capacity = styled.div`
  font-size: 16px;
`;

const Price = styled.div`
  font-size: 16px;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  background: #000;
  color: #fff;
  text-align: center;
`;

const StayWrapImg = styled.img`
  width: 100%;
  height: 210px;
  background: beige;
`;
