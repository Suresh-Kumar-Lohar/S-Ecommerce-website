import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Title from './components/Title/Title'

function App() {
  const [showCart, setShowCart] = useState(true)

  const cartHandler = () => {
    setShowCart((prev) => !prev)
  }

  return (
    <div>
      <Header onClick={cartHandler} />
      {showCart && <Cart />}
      <main>
        <Title />
        <Content />
      </main>
      <Footer />
    </div>
  )
}

export default App
