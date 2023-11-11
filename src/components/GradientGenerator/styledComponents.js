// Style your elements her

import styled from 'styled-components'

export const Heading = styled.h1`
  color: white;
`

export const MainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.bar},
    ${props => props.color1},
    ${props => props.color2}
  );
  line-height: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Para = styled.p`
  color: white;
`

export const CustomButton = styled.button`
  background-color: white;
  border-radius: 5px;
  opacity: ${props => (props.isActivated === true ? 1 : 0.5)};
  height: 40px;
  width: 120px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  color: black;
`

export const UnorderdContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
`

export const FlexContainer = styled(UnorderdContainer)`
  gap: 50px;
`

export const Input = styled.input`
  width: 100px;
  height: 40px;
  margin-top: -20px;
  border: none;
  padding-top: 0;
`

export const SubmitButton = styled(CustomButton)`
  background-color: #014f7b;
  color: black;
  opacity: 1;
`
