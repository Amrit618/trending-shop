import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

interface myProps {
  direction: string;
}
interface props {
  bg: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: reltive;
  overflow: hidden;
`;

const Arrow = styled.div<myProps>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(myProps) => myProps.direction === "left" && "10px"};
  right: ${(myProps) => myProps.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;
const Slide = styled.div<myProps>`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.h1`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState("");
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="fcf1ed">
          <ImageContainer>
            <Image src="https://cdn.pixabay.com/photo/2017/02/26/02/37/girl-2099359_1280.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>GET 40% DISCOUNT </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
