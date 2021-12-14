import React from 'react';
import styled from 'styled-components';
import Building from './Building/Building';

function SpaceList({ spaceList, sort }) {
  return (
    <Wrapper>
      <Ul>
        {FILTER_LIST.map(list => (
          <Li onClick={() => sort(list.filter)} key={list.id}>
            {list.title}
          </Li>
        ))}
      </Ul>
      <SpaceWrapper content={spaceList.length}>
        {spaceList.length ? (
          spaceList.map(space => <Building key={space.id} space={space} />)
        ) : (
          <div>검색 상품이 없습니다.</div>
        )}
      </SpaceWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 70px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 15px;
  cursor: pointer;
  color: gray;
  cursor: pointer;
`;

const SpaceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props =>
    props.content === 0 ? 'center' : 'space-between'};
  align-items: center;
  padding: 70px 0 90px 0;
`;

const FILTER_LIST = [
  {
    id: 1,
    filter: 'popularity',
    title: '인기순',
  },
  {
    id: 2,
    filter: 'price-high',
    title: '가격↑',
  },
  {
    id: 3,
    filter: 'price-low',
    title: '가격↓',
  },
  {
    id: 4,
    filter: 'headcount-high',
    title: '인원↑',
  },
  {
    id: 5,
    filter: 'headcount-low',
    title: '인원↓',
  },
];

export default SpaceList;
