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

const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img<newprops>`
  width:100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

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
          <Price>Price:$20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
