import styled from 'styled-components'
import { COLORS } from '../../../../globalStyles'

const Button = styled.button`
  background: none;
  border: none;
  font-size: 11px;
  color: ${COLORS.lightGray};
  padding: 33px 0;
  margin: 0 16px;

  &:hover {
    color: ${COLORS.text};
    cursor: pointer;
    border-top: 4px solid ${(props) => props.activeColor || COLORS.mercury};
    padding-top: 29px;
  }
`

export default Button
