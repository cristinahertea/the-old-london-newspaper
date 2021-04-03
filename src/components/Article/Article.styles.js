import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const ArticleWrapper = styled.div`
  padding: 0 20px 20px;
  text-align: justify;
  white-space: break-spaces;
  word-break: break-word;
  cursor: pointer;
`

export const ArticleContent = styled.div`
  width: 100%;
`

export const ArticleTitle = styled.div`
  width: 100%;
  font-family: 'Times New Roman', Times, serif;
  font-size: ${(props) => {
    if (props.style === 1) {
      return '25px'
    }
    if (props.style === 2) {
      return '30px'
    }
    if (props.style === 3) {
      return '40px'
    }
  }};
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
  color: ${colors.MAIN_TEXT_COLOR};
  text-shadow: 1px 1px ${colors.MAIN_TEXT_SHADOW};
`
export const ArticleImage = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 15px;
`
