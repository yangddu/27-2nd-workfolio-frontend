import React from 'react';
import styled from 'styled-components';
import DOMESTIC_DATA from './DomesticData';
import ABROAD_DATA from './AbroadData';
import Domestic from './Domestic/Domestic';
import Abroad from './Abroad/Abroad';

function CountryModal({ OpenModal, adjustCity, adjustCountry }) {
  return (
    <ModalWrapper>
            
      <ModalInner>
        <TopDiv>
          어디로 떠날까요?
          <MenuClose onClick={OpenModal}>x</MenuClose>   
        </TopDiv>
        <ContentDiv>
          <RegionWrapper>
            <RegionTitle>국내</RegionTitle>
            <FlexBox>
              {DOMESTIC_DATA.map(district => (
                <Domestic
                  key={district.id}
                  district={district}
                  adjustCity={adjustCity}
                  OpenModal={OpenModal}
                />
              ))}
            </FlexBox>
          </RegionWrapper>
          <RegionWrapper>
            <RegionTitle>해외</RegionTitle>
            <FlexBox>
              {ABROAD_DATA.map(district => (
                <Abroad
                  key={district.id}
                  district={district}
                  adjustCountry={adjustCountry}
                  OpenModal={OpenModal}
                />
              ))}
            </FlexBox>
          </RegionWrapper>
        </ContentDiv>
      </ModalInner>
          
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 300;
`;

const ModalInner = styled.div`
  width: 1100px;
  height: 400px;
  padding: 16px;
  background: #fff;
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 50%);
  padding: 40px 20px;
`;

const MenuClose = styled.button`
  position: absolute;
  margin-right: 90px;
  top: 30;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`;

const TopDiv = styled.div`
  width: 90%;
  font-size: 36px;
  margin-left: 50px;
  padding-bottom: 30px;
  font-weight: bold;
  border-bottom: 2px solid #e4e4e4;
`;

const ContentDiv = styled.div`
  display: flex;
  padding: 30px 20px 0 50px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const RegionWrapper = styled.div`
  width: 500px;
`;

const RegionTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export default CountryModal;
