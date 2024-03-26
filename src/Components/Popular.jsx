import React from 'react'
import { Pop } from './Pop'
import './Popular.css'


const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN COSMETICS</h1>
            <hr />
            <div className='popular-item'>
                {
                    Pop.map((item) => {
                        return (
                            <div className='own-card' key={item.id}>
                                <img src={item.url} alt='' />
                                <h5>Name: {item.title.slice(0, 15)}</h5>
                                <h5>Brand: {item.brand}</h5>
                                <h5>Price: {item.price}</h5>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Popular
