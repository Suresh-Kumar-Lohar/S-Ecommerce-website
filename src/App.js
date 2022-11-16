import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CartProvider from './store/CartProvider'
import { Route } from 'react-router-dom'
import Store from './pages/Store'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <CartProvider>
      <Header />
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/store'>
        <Store />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Footer />
    </CartProvider>
  )
}

export default App
