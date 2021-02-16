import React from 'react'
import { ColoredILink } from '../utils/ILink'
import styled from 'styled-components'

const TocBase = styled.div`
  background-color: #f6f6f6;
  padding: 0.2rem 2rem;
`

type Headline = { value: string }

interface TocProps {
  headlines: Headline[]
  path: string
}

const Toc = ({ headlines, path }: TocProps) => (
  <TocBase>
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
  </TocBase>
)

export default Toc
