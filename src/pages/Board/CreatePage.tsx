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
import axios from 'axios';
import UserInfo from '../../store/UserInfo';
import { useNavigate } from 'react-router-dom';

const backgroundImages = [
  { img: backgroundImg, num: 0 },
  { img: bg1, num: 1 },
  { img: bg2, num: 2 },
  { img: bg3, num: 3 },
  { img: bg4, num: 4 },
  { img: bg5, num: 5 },
];

interface IUserInfo {
  board_name: string;
  password: string;
  bg_num: number;
  graduated_at: string;
}

const CreatePage = () => {
  const navigate = useNavigate();

  const [selectedBackground, setSelectedBackground] = useState(
    backgroundImages[0].img
  );
  const handleBackgroundChange = (image: string) => {
    setSelectedBackground(image);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [bgNum, setBgNum] = useState(backgroundImages[0].num);
  const handleBgNum = (num: number) => {
    setBgNum(num);
  };

  // const board_name = UserInfo((info) => info.board_name);
  // const password = UserInfo((info) => info.password);
  const boardName = '지우';
  const password = '0727';
  const graduatedAt = '2024-12-01';
  // const graduated_at = UserInfo((info) => info.graduated_at);

  const userInfo: IUserInfo = {
    board_name: boardName,
    password: password,
    bg_num: bgNum,
    graduated_at: graduatedAt,
  };

  const fetchBoard = () => {
    axios.post('http://220.69.209.126:5012/board', userInfo).then((res) => {});
  };

  return (
    <CreateContainer background={selectedBackground}>
      <Header>
        <CancelButton>
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => navigate(-1)} />
        </CancelButton>
        <SubmitButton>
          <FontAwesomeIcon icon={faCircleCheck} onClick={() => fetchBoard} />
        </SubmitButton>
      </Header>
      <BackgroundSlide>
        <Slider {...sliderSettings}>
          {backgroundImages.map((image, index) => (
            <SlideItem
              key={index}
              onClick={() => {
                handleBackgroundChange(image.img);
                handleBgNum(image.num);
                console.log(userInfo);
              }}
            >
              <img src={image.img} alt={`bg${index + 1}`} />
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
  cursor: pointer;
`;

const SubmitButton = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
  cursor: pointer;
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
