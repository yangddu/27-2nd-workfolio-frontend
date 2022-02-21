import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCalendar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function RealDetailRoomCardInfo({
  offices,
  openModal,
  commanderCount,
  countList,
  updateIndex,
  reserveDate,
}) {
  const [checkNumbers, setCheckNumbers] = useState(offices.capacity);

  const onIncreaseUsers = () => {
    if (checkNumbers >= offices.capacity_max) {
      alert('최대 수용 인원을 초과했습니다!');
    } else {
      setCheckNumbers(checkNumbers => checkNumbers + 1);
      commanderCount(offices.id, checkNumbers + 1);
    }
  };

  const onDecreaseUsers = () => {
    if (checkNumbers <= offices.capacity) {
      alert('최소 수용 인원보다 적습니다!');
    } else {
      setCheckNumbers(checkNumbers => checkNumbers - 1);
    }
  };

  return (
    <>
      <RoomInfoWrap>
        <RoomImg key={offices.id} src={offices.image} />
        <RoomInfo>
          <RoomName>
            {offices.name}
            <Small
              marginTop="5px"
              fontSize="14px"
              color="hsla(0,0%,100%,.5)"
              letterSpacing="1.5px"
            >
              기본형
            </Small>
          </RoomName>
          <RoomPrice>{Number(offices.price.toLocaleString())}</RoomPrice>
          <RoomEtc>
            기준 {offices.capacity}명 / (최대 {offices.capacity_max}
            명)
          </RoomEtc>
          <RoomCalendar
            onClick={() => {
              openModal();
              reserveDate(offices.reservations);
              updateIndex(offices.id);
            }}
          >
            <AiFillCalendar className="Roomcalendar" />
          </RoomCalendar>
          <CheckUsers>
            인원
            <InCreaseButton onClick={onIncreaseUsers}>
              <AiOutlinePlus />
            </InCreaseButton>
            {checkNumbers}
            <DeCreaseButton onClick={onDecreaseUsers}>
              <AiOutlineMinus />
            </DeCreaseButton>
          </CheckUsers>
        </RoomInfo>
      </RoomInfoWrap>
    </>
  );
}

export default RealDetailRoomCardInfo;

const Small = styled.div`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  padding-bottom: ${({ paddingTop }) => paddingTop};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;

const RoomInfoWrap = styled.div`
  position: relative;
  width: 460px;
`;

const RoomInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colorWhite};
`;
const RoomImg = styled.img`
  width: 100%;
  height: 460px;
  margin: ${({ theme }) => theme.marginCenter};
`;

const RoomName = styled.div`
  position: absolute;
  width: 290px;
  left: 30px;
  bottom: 75px;
  font-size: 24px;
  font-weight: 500;
`;

const RoomPrice = styled.div`
  position: absolute;
  right: 30px;
  bottom: 90px;
  font-size: 21px;
`;

const RoomEtc = styled.div`
  position: absolute;
  left: 30px;
  bottom: 30px;
  font-size: ${({ theme }) => theme.fontRegular};
`;

const RoomCalendar = styled.button`
  .Roomcalendar {
    position: absolute;
    left: 160px;
    bottom: 28px;
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colorWhite};
  }
`;

const CheckUsers = styled.div`
  display: block;
  position: absolute;
  right: 30px;
  bottom: 25px;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 1.5px;
`;

const InCreaseButton = styled.button`
  background: ${({ theme }) => theme.colorWhite};
  margin: 0 10px;
  padding: 5px;
  font-size: 14px;
  font-weight: 700;
`;

const DeCreaseButton = styled.button`
  background: ${({ theme }) => theme.colorWhite};
  margin: 0 0 0 10px;
  padding: 5px;
  font-size: 14px;
  font-weight: 700;
`;
