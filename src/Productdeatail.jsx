import React from 'react'
import { useParams } from 'react-router-dom';
function Productdeatail({productData}) {
    console.log(productData);
    const {id} = useParams()
   const  matchProduct = productData.find(res => res.id == id)
  return (
    <div key={matchProduct.id}>
        <img src={matchProduct.image} alt="" />
        <h1>{matchProduct.name}</h1>
        <p>{matchProduct.description}</p>


    </div>
  )
}

export default Productdeatail