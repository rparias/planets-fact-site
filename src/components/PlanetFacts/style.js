import styled from 'styled-components'

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

export { FactsContainer }
