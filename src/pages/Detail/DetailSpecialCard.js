import React from 'react';
import styled from 'styled-components';

function DetailSpecialCard({ specials }) {
  return (
    <SpecialList>
      {specials?.map((special, idx) => {
        return (
          <SpecialContent key={idx}>
            <SpecialImg src={`${'https://'}` + special.icon} />
            <SpecialTitle>{special.name}</SpecialTitle>
            <SpecialDescription>{special.description}</SpecialDescription>
          </SpecialContent>
        );
      })}
    </SpecialList>
  );
}

export default DetailSpecialCard;

const SpecialList = styled.div`
  margin: 75px 0 0;
  min-width: 1100px;
  display: flex;
  justify-content: center;
`;

const SpecialContent = styled.div`
  position: relative;
  width: 343px;
  float: left;
  margin-left: 35px;
  padding: 45px 33px;
  background: rgba(0, 0, 0, 0.7);

  &:first-child {
    margin: 0;
  }
`;

const SpecialImg = styled.img`
  width: 50px;
  background: ${({ theme }) => theme.colorWhite};
  vertical-align: middle;
`;

const SpecialTitle = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 20px;
  margin: 20px 0;
`;

const SpecialDescription = styled.div`
  color: #b3b3b3;
  font-size: ${({ theme }) => theme.fontRegular};
  line-height: 1.7;
`;
