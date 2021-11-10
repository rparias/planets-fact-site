import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const SmallButtonContainer = styled.button`
  &.active-color {
    background-color: ${(props) => props.activeColor || COLORS.mercury};
    border: none;
  }
`

export default SmallButtonContainer
