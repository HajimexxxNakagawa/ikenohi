import React from 'react'
import Tag, { TagType } from './Tag'
import ShareButtons, { ShareButtonsProps } from './ShareButtons'
import { ILink } from '../utils/ILink'
import styled from 'styled-components'

type BlogEndProps = {
  tags: TagType[]
} & ShareButtonsProps

const BlogEnd = ({ tags, articleUrl, articleTitle, quote }: BlogEndProps) => (
  <BlogEndBase>
    <ShareButtons
      articleUrl={articleUrl}
      articleTitle={articleTitle}
      quote={quote}
    />
    <TagArea>
      <h3>Tag： </h3>
      {tags && tags.map((tag) => <Tag tag={tag} key={tag} />)}
    </TagArea>
    {/* related articles */}
  </BlogEndBase>
)

export default BlogEnd

const BlogEndBase = styled.div`
  margin: 3rem auto;
  border-top: 1px solid #333;
  width: 90%;
  max-width: 800px;
`

const TagArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
