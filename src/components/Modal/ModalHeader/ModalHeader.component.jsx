import React from 'react'
import { CloseButton, ModalHeaderWrapper } from '../Modal.styles'

const ModalHeader = ({ onClose }) => {
  return (
    <ModalHeaderWrapper>
      <CloseButton onClick={(e) => onClose(e)}>x</CloseButton>
    </ModalHeaderWrapper>
  )
}

export default ModalHeader
