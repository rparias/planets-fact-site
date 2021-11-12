import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5% 12%;

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

const FactsContainer = styled.article`
  display: flex;
  flex: 0 0 100%;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export { MainContainer, FactsContainer }
