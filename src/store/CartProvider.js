import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import CartContext from './cart-context'
import AuthContext from './auth-context'

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
  const authCtx = useContext(AuthContext)
  const [items, setItem] = useState([])
  const [productsArr, setProductsArr] = useState(ProductsArr)
  const url = `https://crudcrud.com/api/cf6f3d8cb6324961b29b71a9e4044d0e/${authCtx.email}`

  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get(url)
      // console.log(getData.data)
      setItem([...getData.data])
      // console.log(items)
    }

    fetchData()
  }, [])

  const PostData = async (item) => {
    // console.log(authCtx.email)
    // console.log(item)
    await axios.post(url, item)

    const getData = await axios.get(url)
    // console.log(getData.data)
    setItem([...getData.data])
    // console.log(items)
  }

  const addItemToCartHandler = (item) => {
    if (items.length === 0) {
      // setItem([item])
      PostData(item)
      // console.log(items)
    } else {
      // const getData = await axios.get(url)
      let valPresent = items.find((each) => each.title === item.title)

      if (valPresent) {
        alert('This item is already added to the cart')
      } else {
        // setItem([...items, item])
        PostData(item)
        // console.log(items)
      }
    }
  }

  const removeItemFromCartHandler = async (_id) => {
    await axios.delete(`${url}/${_id}`)
    const getData = await axios.get(url)
    // console.log(getData.data)
    setItem([...getData.data])
  }

  const updateItemHandler = async (item) => {
    console.log(`${url}/${item._id}`)
    console.log(item)
    const updatedData = {
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      rating: item.rating,
      description: item.description,
      quantity: item.quantity,
    }
    await axios.put(`${url}/${item._id}`, updatedData)
    const getData = await axios.get(url)
    console.log(getData.data)
    setItem([...getData.data])
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
