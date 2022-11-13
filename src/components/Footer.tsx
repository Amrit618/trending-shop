import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0px;

`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width:40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color}
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TRENDING SHOP</Logo>
        <Desc>Hi there</Desc>
        <SocialContainer>
          <SocialIcon color = '3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color= "55ACEE">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
