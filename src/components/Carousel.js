import './../styles/Home.css';
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import carous1 from "./../images/slider-one.jpg";
import carous2 from "./../images/slider02.jpg";
import carous3 from "./../images/slider03.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SlideshowContainer = styled.div`
  max-width: 1350px;
  position: relative;
  margin: auto;
`;

const fade = keyframes`
  from {
    opacity: 0.4;
  }

  to {
    opacity:1;
  }
`;

const MySlide = styled.img`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  width: 100%;
  animation: ${fade} 1.5s;
`;

const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
`;

const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
`;

function Carousel() {

  useEffect(()=>{
    setTimeout(handleNext, 10000);
  });

  const slides = [carous1, carous2, carous3];

  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    if (counter >= slides.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handlePrev = () => {
    if (counter <= 0) {
      setCounter(slides.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="cardiv">
      <SlideshowContainer>
        {slides.map((e, i) => (
          <MySlide src={e} key={i} isActive={i === counter} />
        ))}
        <Prev onClick={handlePrev}><ArrowBackIosNewIcon/></Prev>
        <Next onClick={handleNext}><ArrowForwardIosIcon/></Next>
      </SlideshowContainer>
    </div>
  );
}

export default Carousel;