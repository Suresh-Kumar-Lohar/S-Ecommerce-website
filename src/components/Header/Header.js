import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <header className={classes.header}>
      <h4>E-commerce</h4>
      <ul className={classes.navList}>
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
      </ul>
      <button className={classes.btn}>cart</button>
    </header>
  )
}

export default Header
