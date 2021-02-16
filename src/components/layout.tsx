import React from 'react'
import Footer from './Footer'
import Navigation from './Header'
import '../css/base.css'
import styled from 'styled-components'

const Layout: React.FC = ({ children }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
)

export default Layout

const Container = styled.div`
  max-width: 1180;
  margin: 0 auto;
`
