import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillCalendar } from 'react-icons/ai';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarModal from '../../components/CalendarModal/CalendarModal';

function DetailRoomCard({ offices }) {
  const [dateRange, setDateRange] = useState([new Date()]);
  const [startDate, endDate] = dateRange;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationDate, setReservationDate] = useState('');
  const roomSliderSettings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    autoplay: false,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const reserveDate = test => {
    setReservationDate(test);
  };

  return (
    <ContainerRoom>
      {isModalOpen && (
        <CalendarModal
          disabledDateRange={offices[0].reservations}
          excludeDateIntervals={
            !!reservationDate.length &&
            reservationDate.map((date, idx) => {
              return {
                start: new Date(reservationDate[idx][0]),
                end: new Date(reservationDate[idx][1]),
              };
            })
          }
          minDate={new Date()}
          closeModal={closeModal}
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
        />
      )}
      <RoomCon>
        <RoomConTit>ROOM</RoomConTit>
      </RoomCon>
      <RoomSlider {...roomSliderSettings}>
        {offices?.map((office, idx) => {
          return (
            <RoomInfoWrap key={idx}>
              <RoomImg key={office.id} src={office.image} />
              <RoomInfo>
                <RoomName>
                  {office.name}
                  <Small
                    marginTop="5px"
                    fontSize="14px"
                    color="hsla(0,0%,100%,.5)"
                    letterSpacing="1.5px"
                  >
                    기본형
                  </Small>
                </RoomName>
                <RoomPrice>{Number(office.price.toLocaleString())}</RoomPrice>
                <RoomEtc>
                  기준 {office.capacity}명 / (최대 {office.capacity_max}
                  명)
                </RoomEtc>
                <RoomCalendar
                  onClick={() => {
                    openModal();
                    reserveDate(office.reservations);
                  }}
                >
                  <AiFillCalendar className="Roomcalendar" />
                </RoomCalendar>
                <RoomBook>BOOK</RoomBook>
              </RoomInfo>
            </RoomInfoWrap>
          );
        })}
      </RoomSlider>
    </ContainerRoom>
  );
}

export default DetailRoomCard;

const ContainerRoom = styled.div`
  position: relative;
  height: 700px;
  margin: 140px auto 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 700px;
    background: #f5f5f5;
    z-index: -1;
  }
`;

const RoomCon = styled.div`
  max-width: 1330px;
  padding: 120px 20px 0;
  margin: ${({ theme }) => theme.marginCenter};

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    margin-top: 30px;
    background: ${({ theme }) => theme.colorBlack};
  }
`;

const RoomConTit = styled.div`
  margin-top: 35px;
  color: ${({ theme }) => theme.colorBlack};
  font-size: 40px;
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.weightBold};
`;

const Small = styled.div`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  padding-bottom: ${({ paddingTop }) => paddingTop};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;

const RoomSlider = styled(Slider)`
  position: absolute;
  top: 120px;
  left: 40%;
  right: 0;
  width: 100%;
  margin-left: -230px;
  box-shadow: 13px 15px 30px 0 rgb(0 0 0 / 20%);
  background-position: center center;

  .slick-next:before,
  .slick-prev:before {
    content: '';
    background: red;
  }

  .slick-arrow {
    &:hover {
      opacity: 1;
    }
  }
`;

const PrevButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: yellow;
  margin-right: 20px;
  background: url('https://www.stayfolio.com/web/images/arw-fsdetail03.png')
    no-repeat;
  background-position: 0 0px;
  cursor: pointer;
  z-index: 200;
  left: -270px;

  &:hover {
    background: url('https://www.stayfolio.com/web/images/arw-fsdetail03.png')
      no-repeat;
  }
`;

const NextButton = styled.div`
  width: 70px;
  height: 70px;
  left: -190px;
  border-radius: 50%;
  background: yellow;
  background: url('https://www.stayfolio.com/web/images/arw-fsdetail03.png')
    no-repeat;
  background-position: 0 -70px;
  cursor: pointer;
  z-index: 200;

  &:hover {
    left: -190px;
    background: url('https://www.stayfolio.com/web/images/arw-fsdetail03.png')
      no-repeat;
    background-position: 0 -70px;
  }
`;

const RoomImg = styled.img`
  width: 100%;
  height: 460px;
  margin: ${({ theme }) => theme.marginCenter};
`;

const RoomInfoWrap = styled.div`
  position: relative;
  margin-left: 20px;
`;

const RoomInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colorWhite};
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

const RoomBook = styled.div`
  display: block;
  position: absolute;
  right: 30px;
  bottom: 25px;
  font-size: 13px;
  line-height: 25px;
  border-bottom: 1px solid #fff;
  letter-spacing: 1.5px;
`;
