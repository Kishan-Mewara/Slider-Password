// import React from 'react'
// import { useParams } from 'react-router-dom';
// import "./Productdetail.css" 
// import { Link } from 'react-router-dom';   

// function Productdeatail({productData}) {
//     const {id} = useParams()
//    const  matchProduct = productData.find(res => res.id == id)
//   return (
//     <>
//     <div class="product-page" key={matchProduct.id}>
//         <div class="product-image">
//         <img src={matchProduct.image} alt="" />
//         </div>
//         <div class="product-details" >
//             <h1 class="product-title">{matchProduct.name}</h1>
//             <p class="product-description">{matchProduct.description}</p>
//             <p class="product-price">{matchProduct.price}</p>
//            <button>Add to Cart</button>
//         </div>
//     </div>

    
//     </>
//   )
// }

// export default Productdeatail

// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Productdetail.css" 

function ProductDetail({ productCart, addToCart }) {
  const { id } = useParams();
  const matchProduct = productCart.find(res => res.id == id);
  return (
    <div className="product-page" key={matchProduct.id}>
      <div className="product-image">
        <img src={matchProduct.image} alt="" />
      </div>
      <div className="product-details">
        <h1 className="product-title">{matchProduct.name}</h1>
        <p className="product-description">{matchProduct.description}</p>
        <p className="product-price">{matchProduct.price}</p>
        <button onClick={() => addToCart(matchProduct)}>Add to Cart</button>
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default ProductDetail;
