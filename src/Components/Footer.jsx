import React from 'react'
import './Footer.css'
import Bags from '../Images/Bags.png'
import insta from '../Images/insta.png'
import pintrest from '../Images/pintrest.png'
import what from '../Images/what.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo d-flex'>
            <img src={Bags} alt=''/>
            <p>PURPLE</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={insta} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={pintrest} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={what} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
