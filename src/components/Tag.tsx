import React from 'react'

type TagType = '衣' | '食' | '住' | '育' | '働'

interface TagProps {
  label: TagType
}

const Tag: React.FC<TagProps> = ({ label }) => <span className="">{label}</span>

export default Tag
