import React from 'react';
import styled from 'styled-components';

function Theme({ themes, handleTheme, themeOption }) {
  return (
    <Wrapper>
      <Lable>
        {themes}
        <input
          type="checkbox"
          name={themes}
          onChange={handleTheme}
          checked={themeOption.includes(themes)}
          disabled={themeOption.includes('전체선택')} //themeOption 배열에 전체선택 항목이 들어있으면 그 외의 체크박스 모두 disabled
        />
      </Lable>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex-basis: 40%;
  text-align: end;
  padding: 10px 7px 10px 3px;
`;

const Lable = styled.label`
  width: 80px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export default Theme;
