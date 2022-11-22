import React from 'react'
import Product from './Product'
import { useEffect, useState } from 'react'


const Products = () => {
    const [products,setProducts]=useState([]);
    // const {name}=useContext(CartContext)

    useEffect(()=>{
       fetch('https://ecom-rest-apis.herokuapp.com/api/products')
       .then((res)=>{
        return res.json()})
       .then((resp)=>{
        setProducts(resp)
       })
    },[])
    // console.log(products)
    
  return (
    <div className='container mx-auto pb-24'>
      <h1 className='text-lg font-bold my-8'>Products</h1>
      <div className='grid grid-cols-5 my-8 gap-24'>
        {
            products.map((item)=>{
                return <Product key={item.id} item={item}/>
            })
        }

         
      </div>
    </div>
  )
}

export default Products
