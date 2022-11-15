import React from 'react'
import classes from './Product.module.css'
const Product = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.title}>
        <h3>{props.item.title}</h3>
      </div>
      <div className={classes.imgContainer}>
        <img src={props.item.imageUrl} alt='product image' />
      </div>
      <div className={classes.details}>
        <h4>${props.item.price}</h4>
        <button className={classes.btn}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default Product
