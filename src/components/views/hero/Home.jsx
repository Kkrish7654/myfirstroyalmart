import React, { useEffect } from 'react'
import Carousel from './carousel/Carousel'
import TopCard from './top_cads/TopCard'
import ProductCategories from './categories/ProductCategories'

const Home = () => {

  return (
    <div className='hero-section'>
      <div className='carousel-section'>
        <Carousel/>
      </div>
      <div className='hero-product-section'>
        <div className="top-product-card">
          {
            <TopCard/>
          }
        </div>
      </div>
      <div className='top-categories'>
        <h1>top categories</h1>
          <ProductCategories/>
      </div>
    </div>
  )
}

export default Home
