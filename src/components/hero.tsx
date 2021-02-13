import React from 'react'
import styled from 'styled-components'

const HeroBase = styled.div`
  position: relative;
  text-align: center;
  margin: 3rem auto;
  padding: 1px 0;
  width: 90%;
  max-width: 700px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px -10px,
    rgba(0, 0, 0, 0.22) 0px 18px 36px -18px;
`

const width = screen.width

const Hero = () => (
  <HeroBase>
    <h1>
      イケてるケの日を
      {width < 500 && <br />}
      はじめよう
    </h1>
  </HeroBase>
)

export default Hero
