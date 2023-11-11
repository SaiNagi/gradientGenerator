// Style your elements here
import styled from 'styled-components'

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
