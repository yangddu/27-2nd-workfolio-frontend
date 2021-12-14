import React, { useState } from 'react';
import Theme from './Theme/Theme';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/esm/locale';
import CountryModal from './CountryModal/CountryModal';

function Filter({
  themeList,
  adjustHead,
  adjustSearch,
  adjustCountry,
  adjustCity,
  adjustDate,
  adjustPrice,
  adjustTheme,
  reset,
}) {
  const [isFilter, setIsFilter] = useState('');
  const [countHead, setCountHead] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [updatePrice, setUpdatePrice] = useState({
    'min-price': 0,
    'max-price': 0,
  });
  const [updateSearch, setUpdateSearch] = useState('');
  const [themeOption, setThemeOptions] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    adjustDate(start, end);
  };

  const resetThemeOption = () => {
    setThemeOptions([]);
    setUpdateSearch('');
    setStartDate(new Date());
    setEndDate(null);
    setCountHead(1);
    setUpdatePrice({ ...updatePrice, 'min-price': 0, 'max-price': 0 });
  };

  const openPriceRange = e => {
    if (isFilter === e.target.name) {
      setIsFilter('');
    } else setIsFilter(e.target.name);
  };

  const handleFilter = e => {
    setUpdatePrice({ ...updatePrice, [e.target.name]: e.target.value });
  };

  const handleCountHead = e => {
    if (e.target.name === 'plus') {
      setCountHead(prev => prev + 1);
    } else if (e.target.name === 'minus' && countHead !== 1) {
      setCountHead(prev => prev - 1);
    } else {
      alert('최소 인원 수는 1명입니다.');
    }
  };

  const renewSearch = event => {
    setUpdateSearch(event.target.value);
  };

  const OpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleTheme = event => {
    // 체크 박스 클릭 시 themeOption 배열 업데이트 시켜주는 로직
    const selectedThemeName = event.target.getAttribute('name');

    if (selectedThemeName === '전체선택') {
      // 전체선택 클릭 시 전체 선택이 이미 themeOption안에 있으면 빈 배열 없으면 업데이트 해주는 로직
      if (themeOption.includes(selectedThemeName)) {
        setThemeOptions([]);
      } else {
        setThemeOptions(['전체선택']);
      }
    } else if (themeOption.includes(selectedThemeName)) {
      setThemeOptions(themeOption.filter(el => el !== selectedThemeName));
    } else {
      setThemeOptions([...themeOption, selectedThemeName]);
    }
  };

  return (
    <div>
      {isOpenModal && (
        <CountryModal
          OpenModal={OpenModal}
          adjustCity={adjustCity}
          adjustCountry={adjustCountry}
        />
      )}
      <Wrapper top="2px solid black">
        <div>
          <Span>여행지/숙소</Span>
          <Input type="text" value={updateSearch} onChange={renewSearch} />
        </div>
        <div>
          <Button
            width="140px"
            background="#f2f2f2"
            left="10px"
            right="5px"
            onClick={OpenModal}
          >
            국가/도시
          </Button>
        </div>
        <FlexBox items="center">
          <Span left="30px" width="180px">
            체크인/체크아웃
          </Span>
          <Temp
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            monthsShown={2}
            minDate={new Date()}
            locale={ko}
            dateFormat="yyyy/MM/dd"
          />
        </FlexBox>
        <Button
          onClick={() => {
            reset();
            resetThemeOption();
          }}
          width="70px"
          left="330px"
          right="20px"
        >
          초기화
        </Button>
      </Wrapper>
      <Wrapper>
        <div>
          <Button
            width="200px"
            left="0px"
            right="20px"
            onClick={openPriceRange}
            position="relative"
            name="headCount"
          >
            인원
          </Button>
          {isFilter === 'headCount' && (
            <DropBox
              position="absolute"
              size="20px"
              height="150px"
              width="170px"
            >
              <PriceRange>인원 수</PriceRange>
              <Price left="3px">인원 수</Price>
              <FlexBox>
                <button onClick={handleCountHead} name="minus">
                  -
                </button>
                <PriceInput
                  onChange={handleFilter}
                  name="headcount"
                  type="text"
                  value={countHead}
                  align="center"
                />
                <button onClick={handleCountHead} name="plus">
                  +
                </button>
              </FlexBox>
              <Search
                margin="20px 0 10px 20px"
                onClick={event => {
                  openPriceRange(event);
                  adjustHead(countHead);
                }}
                name="headcount"
              >
                적용하기
              </Search>
            </DropBox>
          )}
        </div>
        <div>
          <Button
            width="200px"
            left="0px"
            right="20px"
            onClick={openPriceRange}
            position="relative"
            name="priceRange"
          >
            가격 범위
          </Button>
          {isFilter === 'priceRange' && (
            <DropBox
              position="absolute"
              size="20px"
              height="140px"
              width="265px"
            >
              <PriceRange>가격 범위</PriceRange>
              <Price left="3px">최저요금</Price>
              <Price left="100px">최고요금</Price>
              <FlexBox>
                <PriceInput
                  onChange={handleFilter}
                  value={updatePrice['min-price']}
                  name="min-price"
                  type="text"
                  width="120px"
                  border="1px solid #e4e4e4"
                />
                <Span left="5px" right="5px">
                  _
                </Span>
                <PriceInput
                  onChange={handleFilter}
                  value={updatePrice['max-price']}
                  name="max-price"
                  type="text"
                  width="120px"
                  border="1px solid #e4e4e4"
                />
              </FlexBox>
              <Search
                margin="10px 0 5px 60px"
                onClick={event => {
                  openPriceRange(event);
                  adjustPrice(updatePrice);
                }}
              >
                적용하기
              </Search>
            </DropBox>
          )}
        </div>
        <div>
          <Button
            width="200px"
            left="0px"
            right="20px"
            onClick={openPriceRange}
            position="relative"
            name="theme"
          >
            테마
          </Button>
          {isFilter === 'theme' && (
            <DropBox
              position="absolute"
              size="20px"
              display="flex"
              wrap="wrap"
              content="flex-start"
              width="200px"
            >
              <ThemeTitle> 테마 </ThemeTitle>
              <Search
                onClick={event => {
                  adjustTheme(themeOption);
                  openPriceRange(event);
                }}
                margin="20px 0 10px 35px"
              >
                적용하기
              </Search>
              <TWrapper>
                <Lable>
                  전체선택
                  <input
                    type="checkbox"
                    name="전체선택"
                    onChange={handleTheme}
                    checked={themeOption.includes('전체선택')}
                  />
                </Lable>
              </TWrapper>
              {themeList.map((themes, idx) => (
                <Theme
                  key={idx}
                  themes={themes}
                  handleTheme={handleTheme}
                  themeOption={themeOption}
                />
              ))}
            </DropBox>
          )}
        </div>
      </Wrapper>
      <Center>
        <Search onClick={() => adjustSearch(updateSearch)}>SEARCH </Search>
      </Center>
    </div>
  );
}

const Input = styled.input`
  border: 1px solid #e4e4e4;
  width: 200px;
  height: 36px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-top: ${({ top }) => top};
  border-bottom: 1px solid #e4e4e4;
`;

const Button = styled.button`
  padding: 0 15px;
  width: ${props => props.width};
  background: ${props => props.background};
  border: 1px solid #e4e4e4;
  height: 38px;
  border-radius: 5px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 ${({ right }) => right} 0 ${({ left }) => left};
  position: ${({ position }) => position};
`;

const Span = styled.span`
  width: ${props => props.width};
  font-weight: bold;
  margin-left: ${({ left }) => left};
  margin-right: ${({ right }) => right};
`;

const Search = styled.button`
  height: 36px;
  width: 130px;
  padding: 0 24px 0 25px;
  background-color: black;
  border-radius: 30px;
  font-weight: 500;
  color: white;
  margin: ${props => props.margin};
`;

const Center = styled.div`
  text-align: Center;
  margin-top: 100px;
`;

const DropBox = styled.div`
  display: ${props => props.display};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.content};
  justify-items: ${({ Jitems }) => Jitems};
  position: ${props => props.position};
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  margin-top: 18px;
  padding: 30px;
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: ${props => props.size};
  background-color: white;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: ${props => props.items};
`;

const PriceInput = styled.input`
  width: ${({ width }) => width};
  text-align: ${({ align }) => align};
  height: 30px;
  border-radius: 5px;
  border: ${({ border }) => border};
`;

const Price = styled.span`
  font-size: 12px;
  margin-left: ${props => props.left};
`;

const PriceRange = styled.div`
  margin-bottom: 30px;
`;

const ThemeTitle = styled.div`
  width: 262px;
  font-weight: 500;
`;

const Temp = styled(DatePicker)`
  border: 1px solid #e4e4e4;
  width: 190px;
  height: 38px;
  border-radius: 5px;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
`;

const TWrapper = styled.div`
  flex-basis: 40%;
  text-align: end;
  padding: 10px 7px 10px 3px;
`;

const Lable = styled.label`
  width: 80px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`;

export default Filter;
