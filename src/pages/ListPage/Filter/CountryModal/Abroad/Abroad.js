import React from 'react';
import styled from 'styled-components';

function Abroad({ district, OpenModal, adjustCountry }) {
  return (
    <Region
      onClick={() => {
        adjustCountry(district.country);
        OpenModal();
      }}
    >
      {district.country}
    </Region>
  );
}

const Region = styled.div`
  font-size: 18px;
  color: #333;
  padding: 0 30px 0 0;
  line-height: 60px;
  cursor: pointer;
`;
export default Abroad;
