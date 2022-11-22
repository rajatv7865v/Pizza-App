import React from "react";
import { NavLink } from "react-router-dom";
// import { CartContext } from "../CartContext";

const Navigation = () => {
  // const {cart}=useContext(CartContext)
    const cartStyle={
        background:'orange',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'16px'
    }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
    
            <NavLink to='/'>
                <img src="/images/logo.png" alt="logo" style={{height:'36px'}}/>
            </NavLink>
            <ul className="flex items-center">
                <li ><NavLink to='/'>Home</NavLink></li>
                <li className="ml-10 "><NavLink to='/products'>Products</NavLink></li>
                <li className="ml-10 "><NavLink to='/cart'>
                   <div style={cartStyle}>
                    {/* <span >{cart.totalItems}</span> */}
                    <img className="ml-1" src="/images/cart.png" alt="cart" />
                   </div>
                </NavLink></li>
            </ul>
        
      </nav>
    </>
  );
};

export default Navigation;
