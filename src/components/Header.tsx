import React from 'react'
import { Link } from 'gatsby'
import { MenuProps } from '../utils/interface'
import styled from 'styled-components'
const logo = require('../img/logo.svg')
const menu = require('../img/menu.svg')

const Header = ({ onToggleMenu }: MenuProps) => (
  <HeaderBase>
    <Link to="/">
      <Logo src={logo} alt="イケの日" />
    </Link>
    <MobileNav onClick={onToggleMenu}>
      <MenuButton src={menu} alt="≡" />
    </MobileNav>
    <PCNav>
      <PCNavItem>
        <Link to="/">Home</Link>
      </PCNavItem>
      <PCNavItem>
        <Link to="/about/">About</Link>
      </PCNavItem>
    </PCNav>
  </HeaderBase>
)

export default Header

const Logo = styled.img`
  margin: 1.2rem 0;
  width: 120px;
`

const MenuButton = styled.img`
  margin: 1.2rem 0;
  width: 40px;
`

const HeaderBase = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 2rem;
`

const PCNav = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 56px;
  font-size: 1.25em;
  @media (max-width: 600px) {
    display: none;
  }
`

const PCNavItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  a {
    color: currentColor;
  }
`

const MobileNav = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`
