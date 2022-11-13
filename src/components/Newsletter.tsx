import styled from "styled-components"

const Container = styled.div`
height: 60vh;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
margin: auto;
padding: auto;
`
const Description = styled.h2`
margin: auto;
padding: auto;
`
const InputContainer = styled.div`
margin: auto;
padding: auto;
`
const Input = styled.input`
margin: auto;
padding: auto;
`
const Button = styled.button`
margin: auto;
padding: auto;
`
const Send = styled.div`
margin: auto;
padding: auto;
`

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