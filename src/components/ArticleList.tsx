import React from 'react'
import ArticlePreview from './ArticlePreview'
import styled from 'styled-components'

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

interface ArticleListProps {
  posts: any
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => (
  <ListBase>
    {posts.map(({ node }: any) => {
      return (
        <ArticleItem className="article-item" key={node.slug}>
          <ArticlePreview article={node} />
        </ArticleItem>
      )
    })}
  </ListBase>
)

export default ArticleList
