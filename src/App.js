import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import CartProvider from './store/CartProvider'

function App() {
  const [showCart, setShowCart] = useState(false)

  const cartHandler = () => {
    setShowCart((prev) => !prev)
  }

  return (
    <CartProvider>
      <Header onClick={cartHandler} />
      {showCart && <Cart onClick={cartHandler} />}
      <main>
        <Title />
        <Content />
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
