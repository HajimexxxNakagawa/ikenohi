import React from 'react'
import { ColoredILink } from '../utils/ILink'
import styled from 'styled-components'

type Headline = { value: string }

interface TocProps {
  headlines: Headline[]
  path: string
}

const Toc = ({ headlines, path }: TocProps) => (
  <div>
    <p>
      <strong>目次</strong>
    </p>
    <ul>
      {headlines.map(({ value }) => (
        <ColoredILink to={`${path}#${value}`}>
          <li key={value}>{value}</li>
        </ColoredILink>
      ))}
    </ul>
  </div>
)

export default Toc
