import React from 'react'
import classes from './CartItem.module.css'
const CartItem = (props) => {
  return (
    <div className={classes.cartDetails}>
      <div className={classes.imgDetails}>
        <img src={props.item.imageUrl} alt={props.item.title} />
        <p>{props.item.title}</p>
      </div>
      <p>{props.item.price}</p>
      <div className={classes.quant}>
        <input
          type='number'
          min='1'
          step='1'
          defaultValue='1'
          // value={props.item.quantity}
        />
        <button className={classes.btn}>REMOVE</button>
      </div>
    </div>
  )
}

export default CartItem
