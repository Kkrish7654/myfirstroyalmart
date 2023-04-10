import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.addToCart);
  console.log(cart)
  return (
    <div>
      {/* {
        cart.map((item, index) => {
          return(
            <div key={index}>
              <h1>{item.title}</h1>
            </div>
          )
        }
        )
      } */}
    </div>
  )
}

export default Cart
