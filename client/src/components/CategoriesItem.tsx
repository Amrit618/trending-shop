import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoriesItem = ({ item }: { item: any }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
export const categories = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg",
    title: "SHIRT STYLE",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2018/05/12/12/54/girl-3393214_1280.jpg",
    title: "LONG COAT",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2017/06/08/02/14/girl-2382231_1280.jpg",
    title: "PANTS",
  },
];
