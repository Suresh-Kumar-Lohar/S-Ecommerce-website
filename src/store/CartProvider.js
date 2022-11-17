import React, { useState } from 'react'
import CartContext from './cart-context'

const ProductsArr = [
  {
    id: 'm1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    rating: 3.5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 'm2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    rating: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 'm3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    rating: 4.3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 'm4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    rating: 3.3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
]

const CartProvider = (props) => {
  const [items, setItem] = useState([])
  const [productsArr, setProductsArr] = useState(ProductsArr)

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
    products: productsArr,
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
