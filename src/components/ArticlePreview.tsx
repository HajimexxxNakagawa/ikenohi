import React from 'react'
import { ILink } from '../utils/ILink'
import Img from 'gatsby-image'
import Tag from './Tag'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #fff;
  padding: 8px 8px 0 8px;
  margin: 2px;
  height: calc(100% - 2px);
`

const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0;
`

const ArticlePreview = ({ article }: any) => (
  <Card>
    <ILink to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <Title>{article.title}</Title>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </ILink>
    {article.tags &&
      article.tags.map((tag: any) => (
        <Tag label={tag} key={tag}>
          {tag}
        </Tag>
      ))}
  </Card>
)
export default ArticlePreview
