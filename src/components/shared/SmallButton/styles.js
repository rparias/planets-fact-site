import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const SmallButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  font-size: 9px;
  color: ${COLORS.lightGray};
  margin: 0 24px;
  padding: 20px 0;

  &.active-color {
    color: ${COLORS.text};
    background-color: transparent;
    padding-bottom: 16px;
    border-bottom: 4px solid ${(props) => props.activeColor || COLORS.mercury};
  }
`

export default SmallButtonContainer
