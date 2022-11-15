import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const [items, setItem] = useState([])

  const addItemToCartHandler = (item) => {
    if (items.length === 0) {
      setItem([item])
      // console.log(items)
    } else {
      let valPresent = items.find((each) => each.title === item.title)

      if (valPresent) {
        alert('This item is already added to the cart')
      } else {
        setItem([...items, item])
        // console.log(items)
      }
    }
  }

  const removeItemFromCartHandler = (id) => {
    console.log(id)
    let afterRemovedList = items.filter((each) => {
      if (each.id !== id) {
        console.log('aaaaa')
        return each
      }
    })
    console.log(afterRemovedList)
    //console.log(a)
    setItem([...afterRemovedList])
  }

  const updateItemHandler = (id, quantity) => {
    // console.log(id)
    // console.log('update')
    // console.log(quantity)
    let updatedArr = items.map((each) => {
      if (each.id === id) {
        each.quantity = quantity
        return each
      }
      return each
    })
    setItem([...updatedArr])
  }

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler, //add item list to cart
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
