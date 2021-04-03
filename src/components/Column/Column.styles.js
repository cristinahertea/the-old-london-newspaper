import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const ColumnWrapper = styled.div`
  border-bottom: 3px solid ${colors.MAIN_TEXT_COLOR};
  border-left: ${(props) =>
    props.borderWrap ? `3px solid ${colors.MAIN_TEXT_COLOR}` : 0};
  border-right: ${(props) =>
    props.borderWrap ? `3px solid ${colors.MAIN_TEXT_COLOR}` : 0};
`
