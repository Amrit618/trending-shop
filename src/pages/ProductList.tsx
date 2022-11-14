import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Trending from "../components/Trending"

const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Trending />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>Filter1</Filter>
            <Filter>Filter2</Filter>
        </FilterContainer>
        <Products />
    </Container>
  )
}

export default ProductList