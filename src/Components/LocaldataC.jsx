import React, {useState} from 'react'
import { Cos } from './Cos'

export const LocaldataC = () => {
 
    let [search, setSearch] = useState("")

  return (
    <>
            <div className='input'>
                <p>Searchbar</p>
                <input type='text' placeholder='Enter Items.......,' onChange={(e) => {setSearch(e.target.value) }}/>
            </div>
            <div className='products-container'>
                {
                    Cos.filter((value) => {
                        if (search === ''){
                            return value;
                        }
                        else if(value.Title.toLowerCase().includes(search.toLowerCase())){
                            return value;
                        }
                    })
                        .map((item) => {
                            return (
                                <div className='own-card' key={item.id}>
                                    <img src={item.url} alt=''/>
                                    <h5>Name: {item.Title.slice(0,15)}</h5>                        
                                    <h5>Brand: {item.Brand}</h5>                         
                                    <h5>Color: {item.Color}</h5>
                                    <h5>Price: {item.Price}</h5>
                                    <button>Order Know</button>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}













