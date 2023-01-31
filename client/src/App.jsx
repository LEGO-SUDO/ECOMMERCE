import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'
const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
