import React, { useState, useContext } from 'react'
import classes from './CartItem.module.css'
import CartContext from '../../store/cart-context'

const CartItem = (props) => {
  const cartCtx = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const changeHandler = (e) => {
    setQuantity(e.target.value)
    props.item.quantity = e.target.value
    cartCtx.updateItem(props.item)
  }

  const removeHandler = () => {
    console.log(props.item._id)
    cartCtx.removeItem(props.item._id)
  }

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
          // defaultValue='1'
          value={props.item.quantity}
          onChange={changeHandler}
        />
        <button className={classes.btn} onClick={removeHandler}>
          REMOVE
        </button>
      </div>
    </div>
  )
}

export default CartItem
