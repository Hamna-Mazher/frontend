import React from 'react'
import './Breadcrum.css'
import data_atv from '../Assets/data';
const Breadcrum = (props) => {
    const {product} ={props};
  return (
    <div className='breadcrum'>
Atv Models/ Model Specification {data_atv.name} 
    </div>
  )
}

export default Breadcrum