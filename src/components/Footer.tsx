import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => (
  <nav role="navigation">
    <Navigation>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/about/">About</Link>
      </NavigationItem>
    </Navigation>
  </nav>
)

export default Footer

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 104px;
  font-size: 1.25em;
  background-color: #333;
`

const NavigationItem = styled.li`
  margin: 0 1em;
  a {
    color: #fafafa;
  }
`
