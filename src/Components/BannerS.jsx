import React from 'react'
import './BannerC.css'
import cream from '../Images/cream.png'

const BannerS = () => {
  return (
    <div className='banner'>
            <div className='banner-text'>
                <h1>Flat 50% off</h1>
                <p>12 Hours 20 Mins</p>
                <button>Explore now</button>
            </div>
            <div className='bannerimg'>
                <img src={cream} alt='' />
            </div>
        </div>
  )
}

export default BannerS
