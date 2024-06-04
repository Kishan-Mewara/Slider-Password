import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import AboutUs from './AboutUs';
import Count from './Count';
import "./Password"
import Password from './Password';



function App(){

    const product = [
        {
            id : 1,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kishan',
            description:'hello deshlsk'
        },
        {
            id : 2,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kishan',
            description:'hello deshlsk'
        },
        {
            id : 3,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kishan',
            description:'hello deshlsk'
        },
        {
            id : 4,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kisv vncncncvncnhan',
            description:'hello cvncnvncdeshlsk'
        },
        {
            id : 5,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kiscvbvbcbchan',
            description:'hello cbhhdhhdeshlsk'
        }
    ]
    return(
        <>
        <BrowserRouter>
            <Navbar/>
           
            {/* <Cart
            image={"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"}
            name={'Kishan'}
            description={'Hello Im kishan'}
            />
            <Cart
            image={"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"}
            name={'Kishan1'}
            description={'Hello Im kishan'}
            />
            <Cart/>
            <Cart/> */}
            <Routes>
                <Route path='/' element={<Password/>}></Route>
                <Route path='/Home' element={<Home data={product}/>}></Route>
                <Route path='/AboutUs' element={<AboutUs/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/Count' element={<Count/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
        </>
    )

}

export default App;