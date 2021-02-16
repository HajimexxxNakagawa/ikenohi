import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = () => (
  <HeaderBase>
    <span>イケの日</span>
    <Navigation>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/about/">About</Link>
      </NavigationItem>
    </Navigation>
  </HeaderBase>
)

export default Header

const HeaderBase = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 2rem;
`

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 56px;
  font-size: 1.25em;
`

const NavigationItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  a {
    color: currentColor;
  }
`
