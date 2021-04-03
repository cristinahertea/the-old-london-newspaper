import React, { useState } from 'react'
import Header from '../Header'
import Content from '../Content'
import { HomeWrapper } from './Home.styles'
import Modal from '../Modal'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalData, setModalData] = useState({})

  const handleCloseModal = () => {
    setModalData({})
    setOpenModal(false)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <HomeWrapper>
      {openModal && <Modal onClose={handleCloseModal} modalData={modalData} />}
      <Header />
      <Content openModal={handleOpenModal} setModalData={setModalData} />
    </HomeWrapper>
  )
}
export default Home
