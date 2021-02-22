import React from 'react'
import { ColoredILink } from '../utils/ILink'
import styled from 'styled-components'

type Headline = { headline: string }

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
      {headlines.map(({ headline }) => (
        <ColoredILink to={`${path}#${headline}`} key={headline}>
          <li key={headline}>{headline}</li>
        </ColoredILink>
      ))}
    </ul>
  </TocBase>
)

export default Toc

const TocBase = styled.div`
  background-color: #f6f6f6;
  padding: 0.2rem 2rem;
`
