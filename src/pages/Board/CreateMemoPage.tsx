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
import useUserInfo from '../../store/UserInfo';
import { useNavigate, useParams } from 'react-router-dom';
import useCreate from '../../api/Board/useCreate';
import BoardPage from './components/BoardPage';
import memoImages from '../../assets/memo';

const CreateMemoPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [memoNum, setMemoNum] = useState(memoImages[0].num);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const selectedMemo = memoImages.find((image) => image.num === memoNum);


  const handleSubmit = async () => {
    try {
      console.log('Memo 선택:', selectedMemo);
    } catch (error) {
      console.log('회원가입 중 오류 발생:', error);
    }
  };

  return (
    <CreateContainer>
      <BoardPage onSubmit={handleSubmit}/>
      <SelectedMemoContainer>
        {selectedMemo && <SelectedMemoImage src={selectedMemo.img} alt="선택된 메모" />}
      </SelectedMemoContainer>
      <BackgroundSlide>
        <Slider {...sliderSettings}>
          {memoImages.map((image, index) => (
            <SlideItem
              key={index}
              onClick={() => setMemoNum(image.num)}
            >
              <img src={image.img} alt={`bg${index + 1}`} />
            </SlideItem>
          ))}
        </Slider>
      </BackgroundSlide>
    </CreateContainer>
  );
};
export default CreateMemoPage;

const CreateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SelectedMemoContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const SelectedMemoImage = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 12px;
`;


const BackgroundSlide = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
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
