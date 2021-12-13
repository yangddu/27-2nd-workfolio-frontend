import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { addDays } from 'date-fns';
import './CalendarCustom.css';

function CalendarModal({
  startDate,
  endDate,
  setDateRange,
  closeModal,
  excludeDateIntervals,
  offices,
}) {
  // const handleAddOfficeToCart = () => {
  //   fetch(`${API.USER}/cart`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: sessionStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       office_id: offices.id,
  //       date_range: productAmount,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.MESSAGE === 'SUCCESS') {
  //         alert('장바구니에 담겼습니다.');
  //         window.location.reload();
  //       } else if (result.MESSAGE === 'ITEM_ALREADY_EXIST')
  //         alert('이미 장바구니에 있는 상품입니다.');
  //       else if (result.ERROR === 'INVALID_TOKEN')
  //         alert('로그인 후 장바구니에 담아주세요.');
  //     });
  // };

  return (
    <ModalWrapper>
      <ModalInner>
        <MyDatePicker
          excludeDateIntervals={excludeDateIntervals}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          maxDate={addDays(new Date(), 100)}
          onChange={update => {
            setDateRange(update);
          }}
          locale={ko}
          inline
          monthsShown={2}
        />
        <ReserveButton>예약하기</ReserveButton>
        <MenuClose>
          <AiOutlineClose className="modalClose" onClick={closeModal} />
        </MenuClose>
      </ModalInner>
    </ModalWrapper>
  );
}

export default CalendarModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 300;
`;

const ModalInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  background: ${({ theme }) => theme.colorWhite};
  border-radius: 10px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 50%);
  padding: 40px 20px;
`;

const ReserveButton = styled.button`
  width: 200px;
  height: 40px;
  padding: 4px 16px;
  color: ${({ theme }) => theme.colorWhite};
  background: ${({ theme }) => theme.colorBlack};
  font-size: 16px;
  border-radius: 20px;
`;

const MenuClose = styled.div`
  .modalClose {
    position: absolute;
    top: 20px;
    right: 20px;
    color: grey;
    font-size: 30px;
    cursor: pointer;
  }
`;

const MyDatePicker = styled(DatePicker)`
  width: 90%;
  height: 3rem;
  color: ${({ theme }) => theme.colorWhite};
  background: transparent;
  font-size: 1.6rem;
  font-weight: bold;
  border: 1px solid;
`;
