import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

interface image {
  src: string;
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
const Product = styled.div``;

const ProductDetail = styled.div``;

const Image = styled.img<image>`
  background-color: white;
`;

const Details = styled.div``;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div``;

const ProductSize = styled.div``;

const PriceDetail = styled.div``;

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
                    <b>Product:</b> Winter Jacket
                  </ProductName>
                  <ProductId>
                    <b>Product:</b> Winter Jacket
                  </ProductId>
                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b>26.5 Winter Jacket
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>Price</PriceDetail>
            </Product>
          </Info>
          <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
