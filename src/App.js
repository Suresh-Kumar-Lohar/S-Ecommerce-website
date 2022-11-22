import React, { useContext, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CartProvider from './store/CartProvider'
import Store from './pages/Store'
import Home from './pages/Home'
import EachProduct from './pages/EachProduct'
import LoginPage from './pages/LoginPage'
import AuthContext from './store/auth-context'

const About = React.lazy(() => import('./pages/About'))
const ContactUs = React.lazy(() => import('./pages/ContactUs'))

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <CartProvider>
        <Header />
        <Route path='/' exact>
          <Redirect to='/store' />
        </Route>
        {/* {!authCtx.isLoggedIn && (
          <Route path='/login'>
            <LoginPage />
          </Route>
        )} */}
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/store'>
          {authCtx.isLoggedIn && <Store />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/products/:productId'>
          {authCtx.isLoggedIn && <EachProduct />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
        <Footer />
      </CartProvider>
    </Suspense>
  )
}

export default App
