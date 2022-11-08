import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

interface myProps {
  direction: string;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: reltive;
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
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
