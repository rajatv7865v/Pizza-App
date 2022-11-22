import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Cart from './pages/Cart';
import SingleProduct from './components/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';



const getLocalData=()=>{
  let cart= localStorage.getItem('cart');
  
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }
  else{
    return []
  }
}
function App() {
  const [cart,setCart]=useState(getLocalData());

  
  
  useEffect(()=>{
     localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);

  return (
      <>
      <CartContext.Provider value={{ cart ,  setCart}}>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:_id' element={<SingleProduct/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </CartContext.Provider>
      
      </>
  );
}

export default App;
