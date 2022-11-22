import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext';

const Cart = () => {
  // const [products,setProducts]=useState([]);
  const {cart}=useContext(CartContext);

//   useEffect(()=>{
//  setProducts([cart])
//   },[cart]);

  console.log("cart",cart);
 
  return (
    <div className='container mx-auto lg:w-1/2 w-full pb-24 '>
      <h1 className='my-12 font-bold'>Cart items</h1>

      {/* <ul>
       {
        cart.map((i)=>{
          
          return( <li className='mb-12'> 
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img className='h-16' src={i.image} alt="" />
              <span className='font-bold ml-4 w-48'>{i.name}</span>
            </div>
            <div>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
              <b className='px-4'>2</b>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
            </div>
            <span>{i.price}</span>
            <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
          </div>
        </li>)
        })
       }
      </ul> */}
      <hr className='my-6' />
      <div className='text-right'>
        <b>Grand Total:</b> 600
      </div>
      <div className='text-right mt-6'>
        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
      </div>
    
    </div>
  )
}

export default Cart;