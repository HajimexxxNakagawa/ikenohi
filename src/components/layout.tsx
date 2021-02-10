import React from 'react'
import '../css/base.css'
import Container from './container'
import Navigation from './navigation'

const Template: React.FC = ({ children }) => {
  // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
  //   rootPath = __PATH_PREFIX__ + `/`
  // }

  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}

export default Template
