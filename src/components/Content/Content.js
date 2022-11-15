import React, { useState } from 'react'
import classes from './Content.module.css'
import Product from './Product'

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
]

const Content = () => {
  const [products, setProducts] = useState([...productsArr])
  return (
    <div className={classes.content}>
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
