import React from 'react'
import './BannerC.css'
import hair from '../Images/hair.png'

const BannerH = () => {
  return (
    <div className='banner'>
            <div className='banner-text'>
                <h1>Flat 50% off</h1>
                <p>12 Hours 20 Mins</p>
                <button>Explore now</button>
            </div>
            <div className='bannerimg'>
                <img src={hair} alt='' />
            </div>
        </div>
  )
}

export default BannerH
