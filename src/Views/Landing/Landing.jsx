import React from 'react'
import Hero from '../Hero/Hero'
import Styles from "./Styles/Landing.module.css"

const Landing = () => {
  return (
    <div className={Styles.Landing}>
        <Hero />
    </div>
  )
}

export default Landing