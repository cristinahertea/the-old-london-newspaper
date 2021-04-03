import styled from 'styled-components'
import { colors } from '../../constants/colors'
export const HeaderWrapper = styled.div`
  width: 90%;
  display: block;
  padding: 0 5%;
`
export const HeaderTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  font-family: 'OldLondon';
  font-size: 80px;
  color: ${colors.MAIN_TEXT_COLOR};
  text-shadow: 2px 2px ${colors.MAIN_TEXT_SHADOW};
`

export const HeaderMenu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 3px solid ${colors.MAIN_TEXT_COLOR};
  border-bottom: 3px solid ${colors.MAIN_TEXT_COLOR};
`
export const MenuItem = styled.div`
  width: 100%;
  font-size: 20px;
  color: ${colors.MAIN_TEXT_COLOR};
  font-family: 'Times New Roman', Times, serif;
  text-transform: uppercase;
  text-align: center;
  margin: 5px 0;
  border-right: ${(props) =>
    props.border ? `3px solid ${colors.MAIN_TEXT_COLOR}` : 0};
  font-weight: bold;
`

// if (border) {
//   lalala
// } else {
//   lulul
// }

// border ? lalala : lululu  ternary

// border && lalala //conditional and
