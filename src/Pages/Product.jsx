import React, { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {data_atv} = useContext(HomeContext);
    const {productId} = useParams();
    const product = data_atv.find((e)=> e.id === Number(productId))
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product