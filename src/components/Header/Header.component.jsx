import React from 'react'
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderMenu,
  MenuItem,
} from './Header.styles'
import { config } from './Header.config'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{config.title}</HeaderTitle>
      <HeaderMenu>
        <MenuItem border>{config.menu[0]}</MenuItem>
        <MenuItem border>{config.menu[1]}</MenuItem>
        <MenuItem>{config.menu[2]}</MenuItem>
      </HeaderMenu>
    </HeaderWrapper>
  )
}

export default Header
