import React from 'react'
import Footer from './Footer'
import Navigation from './navigation'
import '../css/base.css'

const Container: React.FC = ({ children }) => (
  <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
)

const Layout: React.FC = ({ children }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
)

export default Layout
