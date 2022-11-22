import React,{useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../CartContext'

const Product = (props) => {

  const [isAdding,setIsAdding]=useState(false);
  
  const {cart,setCart}=useContext(CartContext)

  const addToCart=(event,Product)=>{
  event.preventDefault();

    setIsAdding(true);
    
    setTimeout(()=>{
     setIsAdding(false)
    },200)
    setCart([...cart,Product])

    // let _cart={...cart};
    // console.log(Product)

    // if(!_cart.items){
    //   _cart.items=[]
    // }
    // if(_cart.items[Product]){
    //   _cart.items[Product]=_cart.items[Product] +1;
    // }else{
    //   _cart.items[Product]=1;
    // }


    // if(!_cart.totalItems){
    //   _cart.totalItems=0;
    // }

    // _cart.totalItems +=1;

  //  setCart(...cart,Product)

 
   
  //  const cart={
  //   items:{

  //   }
  //  }

  }
  return (
   <NavLink to={`/products/${props.item._id}`}>
     <div>
    <img src={props.item.image} alt="pizza" />
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>{props.item.name}</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{props.item.size}</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹{props.item.price}</span>
        <button onClick={(e)=>{addToCart(e,props.item)}} className={`${isAdding?'bg-green-500': 'bg-yellow-500'} py-1 px-4  rounded-full font-bold`}>{isAdding?'ADDED':'ADD'}</button>
    </div>
 </div>
   </NavLink>
  )
}

export default Product
