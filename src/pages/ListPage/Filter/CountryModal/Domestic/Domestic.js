import React from 'react';
import styled from 'styled-components';

function Domestic({ district, adjustCity, OpenModal }) {
  return (
    <Region
      onClick={() => {
        adjustCity(district.title);
        OpenModal();
      }}
    >
      {district.title}
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

export default Domestic;
