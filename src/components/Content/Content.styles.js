import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
