// import React, { useState, useEffect } from 'react'
// import "./Addtocart.css"
// import { useParams } from 'react-router-dom'

// export default function Addtocart({productData}) {
//     const {id} = useParams()
    
//     const [cartlist, setcatlis] = useState([])
//     const  matchProduct = productData.find(res => res.id == id)

//     useEffect(()=>{
        
//         if(matchProduct){
//             setcatlis([matchProduct])
//         }
//     },[productData,id])

//     console.log(cartlist);
//   return (
//     <>
//     {
//         data.map((i) => {
//              PushManager
//         })
//     }
//     <div key={[matchProduct].id}>
//         <img src={[matchProduct].image}/>
//         <h1>{[matchProduct].price}</h1>
//         <p>{[matchProduct].description}</p>
//     </div>
//     </>
//   )
// }

// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

function Addtocart({ cart }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default Addtocart;

