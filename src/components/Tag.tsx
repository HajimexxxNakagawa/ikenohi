import React from 'react'
const styles = require('../css/article-preview.module.css')

type TagType = '衣' | '食' | '住' | '育' | '働'

interface TagProps {
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
  <span
    className={styles.tag}
    style={{ color: `${theme[label]}`, border: `2px solid ${theme[label]}` }}
  >
    {label}
  </span>
)

export default Tag
