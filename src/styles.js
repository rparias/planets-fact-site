import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5% 12%;

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

const FactsContainer = styled.article`
  display: flex;
  width: 100%;
  margin-top: 80px;
  justify-content: space-between;

  @media only screen and (max-width: 1023px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export { MainContainer, FactsContainer }
