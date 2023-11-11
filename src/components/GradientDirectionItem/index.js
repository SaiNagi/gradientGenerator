// Write your code here

import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {onChangeBar, item, barInput} = props

  const changeBarHandler = () => {
    onChangeBar(item)
  }

  return (
    <li>
      <CustomButton
        key={item.directionId}
        onClick={changeBarHandler}
        isActivated={barInput === item.directionId}
      >
        {item.displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
