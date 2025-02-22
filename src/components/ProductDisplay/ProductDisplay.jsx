import React,{useState}from 'react'
import './ProductDisplay.css'
import bg from '../Assets/bg-gif.gif'
import CustomSlider from '../CustomSlider/CustomSlider'
import data_atv from '../Assets/data'

const ProductDisplay = (props,idx ) => {
  const [slide,setSlide]= useState(0);
  const nextSlide =() =>{
 setSlide(slide + 1);
  };
  const prevSlide =() =>{
    setSlide(slide - 1);
  };
    const {product} =props;
  return (
    <div className="products">
      <img className='static-image' src={bg} alt="" />
    <div className='productdisplay'>
        <div className="productdisplay-left">
          {/* <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div> */}
          <div className="productdisplay-img">
          <CustomSlider>
        {data_atv.map((item, index) => {
          return <img key={index}  id={item.id} src={item.image} />;
        })}
      </CustomSlider>
            {/* <img src={left} alt="" className=' arrow-left' onClick={prevSlide} /> */}
            {/* <img  className='slide' key={idx} src={product.image} alt="" /> */}
            {/* <img className={slide=== idx ?"slide" :"slide slide-hidden"} key={idx} src={product.image} alt="" /> */}
            {/* <img className={slide=== idx ?"slide" :"slide slide-hidden"} key={idx} src={product.image} alt="" />
            <img src={right}alt="" className=' arrow-right' onClick={nextSlide}/> */}
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