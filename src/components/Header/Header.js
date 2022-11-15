import React, { useContext } from 'react'
import classes from './Header.module.css'
import CartContext from '../../store/cart-context'
const Header = (props) => {
  const cartCtx = useContext(CartContext)

  return (
    <header className={classes.header}>
      <h4>E-commerce</h4>
      <ul className={classes.navList}>
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
      </ul>
      <button
        className={classes.btn}
        onClick={() => {
          props.onClick()
        }}
      >
        cart ({cartCtx.items.length})
      </button>
    </header>
  )
}

export default Header
