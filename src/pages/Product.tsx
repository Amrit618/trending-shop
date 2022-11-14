import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Trending from "../components/Trending"

const Container = styled.div``
const Wrapper = styled.div``
const ImgContainer = styled.div``
const Image = styled.div``
const InfoContainer = styled.div``
const Title = styled.div``
const Desc = styled.div``
const Price = styled.div``

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Trending/>
        <Wrapper>
            <ImgContainer>
            <Image src = "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Fashion jacket</Title>
                <Desc>Hi there this is very nice product</Desc>
                <Price>20$</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product