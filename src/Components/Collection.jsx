import React from 'react'
import './Collection.css'

const Collection = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers in Emails</h1>
        <p>Subcsribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Collection
