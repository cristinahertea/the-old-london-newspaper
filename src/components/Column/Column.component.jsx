import React from 'react'
import { ColumnWrapper } from './Column.styles'

const Column = ({ children, borderWrap }) => {
  return <ColumnWrapper borderWrap={borderWrap}>{children}</ColumnWrapper>
}
export default Column
