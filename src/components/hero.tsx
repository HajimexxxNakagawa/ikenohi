import React from 'react'

const styles = require('../css/hero.module.css')

const width = screen.width

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={styles.heroText}>
      イケてるケの日を
      {width < 500 && <br />}
      はじめよう
    </h1>
  </div>
)
export default Hero
