import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

interface image {
  src: string;
}
interface props{
  color: string;
}


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img<image>`
  width:400px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div<props>`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
`;

const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Trending />
      <Wrapper>
        <Title> Your bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton /* type="filled" */>CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.pixabay.com/photo/2018/05/12/12/54/girl-3393214_1280.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Long Coat
                  </ProductName>
                  <ProductId>
                    <b>ProductId:</b> 12345
                  </ProductId>
                  <ProductColor color = "red" />
                  <ProductSize>
                    <b>Size:</b>26.5 
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>Price</PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
