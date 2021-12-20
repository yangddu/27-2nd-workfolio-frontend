import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
import styled from 'styled-components';

function Main() {
  const [buildingList, setBuildingList] = useState([]);

  useEffect(() => {
    fetch('http://workfolio.kro.kr/buildings')
      .then(res => res.json())
      .then(data => setBuildingList(data.RESULT.buildings[0]));
  }, []);

  const { image, index } = buildingList;

  // const settings = {
  //   dots: false,
  //   infinity: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerPadding: '0px',
  // };

  return (
    <Background>
      {/* <Slider {...settings}>
        {buildingList?.map((image, id) => {
          return (
            <div key={id}>
              <Img src={image} />
            </div>
          );
        })}
      </Slider> */}
    </Background>
  );
}
const Background = styled.div`
  width: auto;
  height: 1200px;
  background-color: ${({ theme }) => theme.colorWhite};
`;

// const Slider = styled.div`
//   width: auto;
//   height: 1200px;
// `;
// const ButtonContent = styled.div``;

// const PreButton = styled.button``;

// const NextButton = styled.button``;

// const Img = styled.img`
//   width: 1702px;
//   height: 850px;
//   background: red;
// `;

export default Main;
