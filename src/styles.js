import styled from 'styled-components'
import { COLORS } from './globalStyles'

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 4% 12%;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    padding: 5%;
    padding-top: 0;

    picture {
      display: flex;
      height: 460px;
      align-items: center;
      justify-content: center;

      img {
        width: 64%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 6%;
    picture {
      height: 300px;
      margin-top: 65px;

      img {
        width: 38%;
      }
    }
  }
`

const FooterContainer = styled.footer`
  text-align: center;
  color: ${COLORS.lightGray};
  @media only screen and (max-width: 767px) {
    font-size: 11px;
  }
`

export { MainContainer, FooterContainer }
