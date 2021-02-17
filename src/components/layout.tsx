import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import '../css/base.css'
import styled from 'styled-components'

const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <Container>
      <Header onToggleMenu={toggleMenu} />
      {children}
      <Footer />
      {isMenuOpen && <Menu onToggleMenu={toggleMenu} />}
    </Container>
  )
}

export default Layout

const Container = styled.div`
  max-width: 1180;
  margin: 0 auto;
`
