import React from 'react'
import { Backdrop, ModalContent } from './Modal.styles'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

const Modal = ({ onClose, modalData }) => {
  return (
    <Backdrop>
      <ModalContent>
        <ModalHeader onClose={onClose} title={'Title'} />
        <ModalBody data={modalData} />
      </ModalContent>
    </Backdrop>
  )
}

export default Modal
