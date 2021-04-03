import React from 'react'
import { ContentWrapper } from './Content.styles'
import Article from '../Article'
import Column from '../Column'
import { articleData } from '../../data/articles'

const Content = ({ openModal, setModalData }) => {
  return (
    <ContentWrapper>
      <Column borderWrap>
        <Article
          onClick={setModalData}
          articleData={articleData[0]}
          openModal={openModal}
        />
        <Article
          onClick={setModalData}
          articleData={articleData[1]}
          openModal={openModal}
        />
      </Column>
      <Column>
        <Article
          onClick={setModalData}
          articleData={articleData[2]}
          openModal={openModal}
        />
        <Article
          onClick={setModalData}
          articleData={articleData[3]}
          openModal={openModal}
        />
      </Column>
      <Column borderWrap>
        <Article
          onClick={setModalData}
          articleData={articleData[4]}
          openModal={openModal}
        />
        <Article
          onClick={setModalData}
          articleData={articleData[5]}
          openModal={openModal}
        />
      </Column>
    </ContentWrapper>
  )
}
export default Content
