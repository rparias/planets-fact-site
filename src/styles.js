import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 5%;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
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
    picture {
      height: 300px;
      margin-top: 65px;

      img {
        width: 38%;
      }
    }
  }
`

export default MainContainer
