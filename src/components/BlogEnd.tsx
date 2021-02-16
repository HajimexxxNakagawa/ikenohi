import React from 'react'
import Tag, { TagType } from './Tag'
import { ILink } from '../utils/ILink'
import styled from 'styled-components'

const BlogEndBase = styled.div`
  margin: 3rem auto;
`

const TagArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface BlogEndProps {
  tags: TagType[]
}

const BlogEnd = ({ tags }: BlogEndProps) => (
  <BlogEndBase>
    {/* share button */}
    <TagArea>
      <h3>Tag： </h3>
      {tags && tags.map((tag) => <Tag label={tag} key={tag} />)}
    </TagArea>
    <p style={{ textAlign: 'center' }}>
      <ILink to="/">Topへ</ILink>
    </p>
    {/* about me */}
  </BlogEndBase>
)

export default BlogEnd
