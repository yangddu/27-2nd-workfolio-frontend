import React from 'react';
import styled from 'styled-components';

function ListButton({ page, movePage }) {
  return (
    <Button
      onClick={() => {
        movePage(page);
      }}
      name="offset"
    >
      {page}
    </Button>
  );
}

const Button = styled.div`
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;
`;
export default ListButton;
