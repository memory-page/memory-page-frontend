import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import backgroundImg from '../../assets/background.png';
import bg1 from '../../assets/bg-1.png';
import bg2 from '../../assets/bg-2.png';
import bg3 from '../../assets/bg-3.png';
import bg4 from '../../assets/bg-4.png';
import bg5 from '../../assets/bg-5.png';

const backgroundImages = [backgroundImg, bg1, bg2, bg3, bg4, bg5, bg5, bg5];

const CreatePage = () => {
  const [selectedBackground, setSelectedBackground] = useState(
    backgroundImages[0]
  );

  const handleBackgroundChange = (image: string) => {
    setSelectedBackground(image); // 상태를 클릭한 이미지로 업데이트
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <CreateContainer background={selectedBackground}>
      <Header>
        <CancelButton>
          <FontAwesomeIcon icon={faCircleXmark} />
        </CancelButton>
        <SubmitButton>
          <FontAwesomeIcon icon={faCircleCheck} />
        </SubmitButton>
      </Header>
      <BackgroundSlide>
        <Slider {...sliderSettings}>
          {backgroundImages.map((image, index) => (
            <SlideItem
              key={index}
              onClick={() => {
                handleBackgroundChange(image);
                console.log(selectedBackground);
              }}
            >
              <img src={image} alt={`bg${index + 1}`} />
            </SlideItem>
          ))}
        </Slider>
      </BackgroundSlide>
    </CreateContainer>
  );
};
export default CreatePage;

const CreateContainer = styled.div<{ background: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
`;

const CancelButton = styled.div`
  position: absolute;
  top: 10px;
  left: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
`;

const SubmitButton = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
`;

const BackgroundSlide = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding-left: 32px;
  padding-right: 33px;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.6);

  .slick-prev {
    z-index: 10;
    color: white;
  }
  .slick-next {
    z-index: 10;
    color: white;
  }

  .slick-dots li button:before {
    color: white;
  }
`;

const SlideItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 98%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(0.95);
    }
  }
`;
