import React from 'react'
import { ILink } from '../utils/ILink'
import Img from 'gatsby-image'
import Tag, { TagType } from './Tag'
import styled from 'styled-components'

type ArticleNode = Pick<
  GatsbyTypes.ContentfulBlogPost,
  'slug' | 'heroImage' | 'title' | 'publishDate' | 'description'
> & { tags: TagType[] }

export type ArticlePreviewProp = {
  node: ArticleNode
}

const ArticlePreview = ({ node }: ArticlePreviewProp) => {
  const { slug, heroImage, title, publishDate, description, tags } = node
  return (
    <Card>
      <ILink to={`/blog/${slug}`}>
        <Img alt="" fluid={heroImage!.fluid!} />
        <Title>{title}</Title>
        <small>{publishDate}</small>
        <div
          dangerouslySetInnerHTML={{
            __html: description!.childMarkdownRemark!.html!,
          }}
        />
      </ILink>
      {tags && tags.map((tag) => <Tag tag={tag} key={tag} />)}
    </Card>
  )
}

export default ArticlePreview

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
