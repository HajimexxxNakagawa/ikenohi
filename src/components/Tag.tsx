import React from 'react'
import styled from 'styled-components'

const TagBase = styled.span`
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem;
  line-height: 1;
  border-radius: 2px;
  margin-right: 0.5em;
`

export type TagType = '衣' | '食' | '住' | '育' | '働'

export interface TagProps {
  label: TagType
}

const theme = {
  衣: '#73B66D',
  食: '#DB5C00',
  住: '#D0BEA2',
  育: '#16697A',
  働: '#C86B59',
}

// const link = {
//   衣: '/clothing',
//   食: '/food',
//   住: '/housing',
//   育: '/child-care',
//   働: '/work',
// }

const Tag: React.FC<TagProps> = ({ label }) => (
  <TagBase
    style={{ color: `${theme[label]}`, border: `2px solid ${theme[label]}` }}
  >
    {label}
  </TagBase>
)

export default Tag
