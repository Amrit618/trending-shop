import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
height: 60vh;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column; 
`
const Title = styled.h1`

`
const Description = styled.h2`

`
const InputContainer = styled.div`

`
const Input = styled.input`

`
const Button = styled.button`

`
/* const Send = styled.div`
margin: auto;
padding: auto;
` */

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get notified about trending Products</Description>
        <InputContainer>
        <Input placeholder="Your e-mail"/>
        <Button>
            <Send />
        </Button>
        </InputContainer>
    </Container>
  )
}
export default Newsletter