import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color:white;
display:flex;
align-items:center;
justify-content: center;
font-size:16px;
font-weight: 500; `

const Trending = () => {
  return (
    <Container>
        Hey!! No shipping cost with popular products 50$
    </Container>
  )
}

export default Trending