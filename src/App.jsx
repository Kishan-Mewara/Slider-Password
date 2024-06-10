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
import Productdeatail from './Productdeatail';



function App(){

    const product = [
        {
            id : 1,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kishdfbfbdfban',
            description:'hellcgjfyjjjjfjfjjfjjo deshlsk'
        },
        {
            id : 2,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kishan',
            description:'hellgjfgjgfjfgjfgjfgjfgjfgjfjjfjfgo deshlsk'
        },
        {
            id : 3,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kisxcvxxxxbhan',
            description:'hellocgcjgjgfhggfdhjfgjhfhjfjfg deshlsk'
        },
        {
            id : 4,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kisv vncncncvncnhan',
            description:'hello ccgncgncgncfgfcmfmvncnvncdeshlsk'
        },
        {
            id : 5,
            image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            name:'kiscvbxbxbxbvbcbchan',
            description:'hello cbhhdhhdefhjffhfhgshlsk'
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
                <Route path='/pass' element={<Password/>}></Route>
                <Route path='/' element={<Home data={product}/>}></Route>
                <Route path='/AboutUs' element={<AboutUs/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/Count' element={<Count/>}></Route>
                <Route path='/product/:id' element={<Productdeatail productData={product}/>}></Route>

            </Routes>
            <Footer/>
        </BrowserRouter>
        
        </>
    )

}

export default App;