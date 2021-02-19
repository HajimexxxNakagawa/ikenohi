import React from 'react'
import styled from 'styled-components'

const Hero = () => (
  <HeroBase>
    <HeroTitle>
      <span>イケてるケの日を</span>
      <span>はじめよう</span>
    </HeroTitle>
  </HeroBase>
)

export default Hero

const HeroBase = styled.div`
  position: relative;
  margin: 3rem auto;
  padding: 1px 0;
  width: 90%;
  max-width: 700px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px -10px,
    rgba(0, 0, 0, 0.22) 0px 18px 36px -18px;
`

const HeroTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 580px) {
    flex-direction: column;
    font-size: 1.2rem;
  }
`
