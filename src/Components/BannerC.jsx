import React from 'react'
import product from '../Images/product.png'
import './BannerC.css'

const BannerC = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h1>Flat 50% off</h1>
                <p>12 Hours 20 Mins</p>
                <button>Explore now</button>
            </div>
            <div className='banner-img'>
                <img src={product} alt='' />
            </div>
        </div>
    )
}

export default BannerC
