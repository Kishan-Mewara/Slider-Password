import React, { useEffect } from 'react'
import { useState } from 'react'
import "./App.css"

function Count() {
    const [count, setcount] = useState(1)

    const Nvm = [
        {
            id : 1,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
        },
        {
            id : 2,
            image:'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
            id : 3,
            image:'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            id : 4,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
        },
        {
            id : 5,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
        },
    ]

    const NextImg = () =>{
        if(count===Nvm.length-1)
        {
            setcount(0)
        }
        else{
            setcount(count+1) 
        }
    }

    const dec = () =>{

        if(count===0)
        {
            setcount(Nvm.length - 1)
        }
        else{
            setcount(count-1)
        }
    } 
    
    useEffect(() => {
        const interval = setInterval(() => {
            NextImg();
            
        },1000);
    
        return() => clearInterval(interval)
    }) 
  return (
    <>
    <button>Incriment</button>
    <img src={Nvm[count].image} alt="" />
    <button onClick={dec}>Decriment</button>
    </>
  )
}

export default Count