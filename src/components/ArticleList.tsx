import React from 'react'
import ArticlePreview, { ArticlePreviewProp } from './ArticlePreview'
import styled from 'styled-components'

// TODO
interface ArticleListProps {
  posts: ArticlePreviewProp[]
}

const ArticleList = ({ posts }: ArticleListProps) => (
  <ListBase>
    {posts.map(({ node }) => {
      return (
        <ArticleItem key={node.slug}>
          <ArticlePreview node={node} />
        </ArticleItem>
      )
    })}
  </ListBase>
)

export default ArticleList

const ListBase = styled.ul`
  background-color: #f6f6f6;
  margin: 0;
  padding: 0 2px 8px 2px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const ArticleItem = styled.li`
  padding: 6px 2px;
`
