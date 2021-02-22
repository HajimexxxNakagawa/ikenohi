import React from 'react'
import styled from 'styled-components'

const TagObj = {
  衣: { theme: '#73B66D', link: '/clothing' },
  食: { theme: '#DB5C00', link: '/food' },
  住: { theme: '#D0BEA2', link: '/housing' },
  育: { theme: '#16697A', link: '/child-care' },
  働: { theme: '#C86B59', link: '/work' },
} as const

export type TagType = keyof typeof TagObj

export interface TagProps {
  tag: TagType
}

const Tag = ({ tag }: TagProps) => (
  <TagBase
    style={{
      color: `${TagObj[tag].theme}`,
      border: `2px solid ${TagObj[tag].theme}`,
    }}
  >
    {tag}
  </TagBase>
)

export default Tag

const TagBase = styled.span`
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem;
  line-height: 1;
  border-radius: 2px;
  margin-right: 0.5em;
`
