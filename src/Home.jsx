import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function Home({data}) {
    return (
        <>
        {
            data.map((i) => (
                  <div className="card-container" key={i.id}>
            <div className="card">
                <img src={i.image} alt="Delicious Food"/>
                <div className="card-content">
                    <h2>{i.name}</h2>
                    <Link to={`/product/${i.id}`}><button>view product</button></Link>
                    
                </div>
            </div>
        </div>
            ))
        }


            {/* <div className="card-container">
            <div className="card">
                <img src={image} alt="Delicious Food"/>
                <div className="card-content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div> */}

        </>
    )
}
