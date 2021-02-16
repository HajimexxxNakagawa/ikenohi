import React from 'react'
import Tag, { TagType } from './Tag'
import { ILink } from '../utils/ILink'
import styled from 'styled-components'

const BlogEndBase = styled.div`
  margin: 3rem auto;
`

interface BlogEndProps {
  tags: TagType[]
}

const BlogEnd = ({ tags }: BlogEndProps) => (
  <BlogEndBase>
    {/* share button */}
    <div style={{ textAlign: 'center' }}>
      <h3>Tags</h3>
      {tags &&
        tags.map((tag) => (
          <Tag label={tag} key={tag}>
            {tag}
          </Tag>
        ))}
      <p>
        <ILink to="/">Topへ</ILink>
      </p>
    </div>
    {/* about me */}
  </BlogEndBase>
)

export default BlogEnd
