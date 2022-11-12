import styled from "styled-components"

const Container = styled.div``
const Image = styled.img``
const Info = styled.div``
const Title = styled.h1``
const Button = styled.button``

const CategoriesItem = ({item}: {item:any}) => {
  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

    </Container>
  )
}

export default CategoriesItem
export const categories = [
    {
        id:1,
        img: "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg",
        title: "SHIRT STYLE"
    },
    {
        id:2,
        img: "https://cdn.pixabay.com/photo/2018/05/12/12/54/girl-3393214_1280.jpg",
        title: "LONG COAT"
    },
    {
        id:3,
        img: "https://cdn.pixabay.com/photo/2017/06/08/02/14/girl-2382231_1280.jpg",
        title: "PANTS"
    }]