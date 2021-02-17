import React from 'react'
import { Link } from 'gatsby'
import { MenuProps } from '../utils/interface'
import styled from 'styled-components'

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

const Menu = ({ onToggleMenu }: MenuProps) => (
  <MenuBase>
    <div style={{ textAlign: 'center' }}>
      <MenuList>
        {menuItems.map(({ label, to }) => {
          return (
            <li key={label} style={{ marginLeft: '-2.4rem' }}>
              <Link onClick={onToggleMenu} to={to}>
                {label}
              </Link>
            </li>
          )
        })}
      </MenuList>
      <span onClick={onToggleMenu}>Close</span>
    </div>
  </MenuBase>
)

export default Menu

const MenuBase = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  opacity: 0.95;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  animation: fadeIn 0.8s ease 0s 1 normal;
  -webkit-animation: fadeIn 0.8s ease 0s 1 normal;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.95;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.95;
    }
  }
`
const MenuList = styled.ul`
  list-style: none;
`
