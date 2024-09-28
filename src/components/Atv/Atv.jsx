import React from 'react'
import './Atv.css'
import data_atv from '../Assets/data'
import Items from '../Items/Items'
const Atv = () => {
  return (
    <div className='atv'>
      <h1>MODELS</h1>
      <hr />
      <div className="atv-item">
        {data_atv.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.price}  />
        })}
      </div>
    </div>
  )
}

export default Atv