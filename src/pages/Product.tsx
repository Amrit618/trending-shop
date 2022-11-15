import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Trending from "../components/Trending";

interface newprops {
  src: any;
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div``;

const Image = styled.img<newprops>`
  padding: 105px;
`;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Desc = styled.p``;

const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Trending />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.pixabay.com/photo/2017/06/08/02/14/girl-2382231_1280.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Fashion jacket</Title>
          <Desc>Hi there, this is very nice product</Desc>
          <Price>20$</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
