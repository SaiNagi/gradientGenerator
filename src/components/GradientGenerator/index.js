import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  Heading,
  MainContainer,
  Container,
  Para,
  //   CustomButton,
  UnorderdContainer,
  //   FlexContainer,
  SubmitButton,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1Input: '',
    color2Input: '',
    barInput: 'TOP',
    bar: 'TOP',
    color1: '#8ae323',
    color2: '#014f7b',
  }

  onChangeBar = item => {
    this.setState({barInput: item.directionId})
  }

  changeColor1 = event => {
    this.setState({color1Input: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2Input: event.target.value})
  }

  changeBackground = () => {
    const {barInput, color1Input, color2Input} = this.state
    this.setState({
      bar: barInput,
      color1: color1Input,
      color2: color2Input,
    })
  }

  render() {
    const {bar, color1, color2, barInput} = this.state
    return (
      <MainContainer
        bar={bar}
        color1={color1}
        color2={color2}
        data-testid="gradientGenerator"
      >
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <UnorderdContainer>
            {gradientDirectionsList.map(item => (
              <GradientDirectionItem
                onChangeBar={this.onChangeBar}
                key={item.directionId}
                item={item}
                barInput={barInput}
              />
            ))}
          </UnorderdContainer>
          <Para>Pick the Colors</Para>
          <UnorderdContainer>
            <Para>{color1}</Para>
            <Para>{color2}</Para>
          </UnorderdContainer>
          <UnorderdContainer>
            <Input type="color" onChange={this.changeColor1} />
            <Input type="color" onChange={this.changeColor2} />
          </UnorderdContainer>
          <SubmitButton type="button" onClick={this.changeBackground}>
            Generate
          </SubmitButton>
        </Container>
      </MainContainer>
    )
  }
}

export default GradientGenerator
