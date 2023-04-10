import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/views/header/Navbar'
import Home from './components/views/hero/Home'
import ProductsPage from './components/views/products/ProductsPage'
import ProductViewsPage from './components/views/products/ProductViewsPage';
import NewProduct from './components/views/commerce/NewProduct';
import Cart from './components/views/products/Cart';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today-deals' element={<NewProduct />} />
        <Route path='/new-arrivals' element={<ProductsPage />} />
        <Route path='/product/:productId' element={<ProductViewsPage />} />
        <Route path='/cart' element={<Cart />} /> 
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
