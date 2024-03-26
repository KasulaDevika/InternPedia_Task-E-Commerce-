import React from 'react'
import './Header.css'
import product from '../Images/product.png'
import arrow from '../Images/arrow.png'
import hand from '../Images/hand.png'

const Header = () => {
    return (
        <div className='product'>
            <div className='product-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div className='pro-pro-icon'>
                    <p>new</p>
                    <img src={hand} alt='' />
                </div>
                <p className='text'>Collections</p>
                <p className='text'>For Everyone</p>
                <div className='pro-latest-btn'>
                    <p>LatestCollection</p>
                    <img src={arrow} alt='' />
                </div>
            </div>
            <div className='product-right'>
                <img src={product} alt='' />
            </div>
        </div>
    )
}

export default Header
