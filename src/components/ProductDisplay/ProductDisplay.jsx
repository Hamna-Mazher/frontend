import React from 'react'
import './ProductDisplay.css'
import bg from '../Assets/bg-gif.gif'
const ProductDisplay = (props) => {
    const {product} =props;
  return (
    <div className="products">
      <img className='static-image' src={bg} alt="" />
    <div className='productdisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
        <h1>{product.name} </h1>
        <div className="productdisplay-right-price">${product.price}</div>
        <div className="productdisplay-right-specifications">
          <div className="productdisplay-right-details">{product.engine}</div>
          <div className="productdisplay-right-details">{product.volume}</div>
          <div className="productdisplay-right-details"> {product.cylinders}</div>
          <div className="productdisplay-right-details"> {product.ratio}</div>
          <div className="productdisplay-right-details">{product.power}</div>
          <div className="productdisplay-right-details"> {product.steering}</div>
          <div className="productdisplay-right-details">{product.transmission}</div>
          <div className="productdisplay-right-details">{product.tires}</div>
          <div className="productdisplay-right-details">{product.rims}</div>
          <div className="productdisplay-right-details">{product.speed}</div>
          <div className="productdisplay-right-details">{product.dimensions}</div>
        </div>
        <button>Order an ATV</button>
        </div>

        
    </div>
    <div className="productdisplay-right-description">
      <h1>Model description</h1>
           <hr /> {product.description}
        </div> 
    </div>
  )
}

export default ProductDisplay