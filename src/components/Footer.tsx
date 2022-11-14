import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

interface Payment{
    src:any;
}

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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.div`
  width: 50%;
`;

const Footer = ({src}:string | any) => {
  return (
    <Container>
      <Left>
        <Logo>TRENDING SHOP</Logo>
        <Desc>Hi there</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home </ListItem>
          <ListItem>Cart </ListItem>
          <ListItem>Man Fashion </ListItem>
          <ListItem>Woman Fashion </ListItem>
          <ListItem>Accessories </ListItem>
          <ListItem>My Accout </ListItem>
          <ListItem>Order Tracking </ListItem>
          <ListItem>Wishlist </ListItem>
          <ListItem>Wishlist </ListItem>
          <ListItem>Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/>
          Helsinki, Kaivokatu 13
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} />
          +3584236664
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/>
          contact@trending.com
        </ContactItem>
        <Payment placeholder="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
