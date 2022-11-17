import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
// import CartContext from '../../store/cart-context'
const Header = () => {
  // const cartCtx = useContext(CartContext)

  return (
    <header className={classes.header}>
      {/* <h4>E-commerce</h4> */}
      <ul className={classes.navList}>
        <li>
          <Link to='/home'>HOME</Link>
        </li>
        <li>
          <Link to='/store'>STORE</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT US</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
