import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  padding: 104px;
  min-width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  /*   width: 200px;
  height: 200px;
  border-radius:70%;
  background-color: white;
  position: absolute; */
`;

const Image = styled.img`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 25px;
  column-gap: 25px;
  /*   display:flex;
  padding: 300px;
  margin:100px;
  heigth: auto;
  row-gap: 50px;
  column-gap:50px;
  z-index: 2; */
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductItem = ({ item }: any) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} key={item.id} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
