import React from 'react'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
  ArticleImage,
} from './Article.styles'

const Article = ({ articleData, openModal, onClick }) => {
  const handleClick = () => {
    if (articleData.formData) {
      openModal()
      onClick(articleData)
    }
  }
  return (
    <ArticleWrapper onClick={handleClick}>
      <ArticleTitle style={articleData.titleStyle}>
        {articleData.title}
      </ArticleTitle>
      {articleData.image && <ArticleImage src={articleData.image} />}
      <ArticleContent>{articleData.content}</ArticleContent>
    </ArticleWrapper>
  )
}
export default Article

// let article = document.querySelector('.article')
// article.onclick = () => {
//    console.log('yay')
// } asa e in vanilla javascript
