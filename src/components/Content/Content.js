import React, { useState, useContext } from 'react'
import classes from './Content.module.css'
import Product from './Product'
import CartContext from '../../store/cart-context'

const productsArr = [
  {
    id: 'm1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 'm2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 'm3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'm4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
]

const Content = (props) => {
  const cartCtx = useContext(CartContext)
  const [products, setProducts] = useState([...productsArr])
  return (
    <div className={classes.content}>
      <button
        className={classes.btn2}
        onClick={() => {
          props.onClick()
        }}
      >
        cart ({cartCtx.items.length})
      </button>
      <h1 className={classes.h1}>MUSIC</h1>
      <div className={classes.products}>
        {products.map((each) => (
          <Product key={each.title} item={each} />
        ))}
      </div>
      <button className={classes.btn}>See the cart</button>
    </div>
  )
}

export default Content
