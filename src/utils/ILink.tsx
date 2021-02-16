import { Link } from 'gatsby'
import styled from 'styled-components'

export const ColoredILink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  color: #2b98b0;
  &:hover {
    color: #54c5de;
  }
`

export const ILink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`
