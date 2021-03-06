import styled from 'styled-components'
import { COLORS } from '../../../../globalStyles'

const Button = styled.button`
  width: 100%;
  padding: 20px 64px;
  background-color: ${COLORS.background};
  border: none;
  border-top: 1px solid ${COLORS.darkGray};
  text-align: left;
  position: relative;

  &::before {
    position: absolute;
    left: 24px;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color || COLORS.mercury};
    margin-right: 25px;
  }

  &::after {
    position: absolute;
    right: 24px;
    content: '>';
    color: ${COLORS.darkGray};
  }
`

export default Button
