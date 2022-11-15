import React, { useState } from 'react'
import CartItem from './CartItem'
import classes from './Cart.module.css'
const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
]

const Cart = () => {
  const [cartItems, setCartItems] = useState([...cartElements])
  return (
    <div className={classes.cart}>
      <h2>CART</h2>
      <div className={classes.cartDetails}>
        <h3>ITEM</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.title} item={item} />
      ))}
      <h4>Total : 420</h4>
      <button className={classes.btn}>PURCHASE</button>
    </div>
  )
}

export default Cart
