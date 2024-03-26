import React from 'react'
import './Navbar.css'
import icon from '../Images/icon.png'
import cart from '../Images/cart.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
            <img src={icon} alt=''></img>
            <p><b>PURPLE</b></p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}><b><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</b></li>
        <li onClick={()=>{setMenu("cosmetics")}}><b><Link style={{textDecoration:'none'}} to='/cosmetics'>Cosmetics</Link>{menu==='cosmetics'?<hr/>:<></>}</b></li>
        <li onClick={()=>{setMenu("haircare")}}><b><Link style={{textDecoration:'none'}} to='/haircare'>Haircare</Link>{menu==='haircare'?<hr/>:<></>}</b></li>
        <li onClick={()=>{setMenu("skincare")}}><b><Link style={{textDecoration:'none'}} to='/skincare'>Skincare</Link>{menu==='Skincare'?<hr/>:<></>}</b></li>
      </ul>
      <div className='nav-login-cart'>
        <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to='/cart'><img src={cart} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
        </div>
      </div>
  )
}

export default Navbar
