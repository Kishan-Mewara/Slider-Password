import { useEffect, useState } from 'react';
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
import Addtocart from './Addtocart';



function App(){

    const [cart, setCart] = useState([]);

    const addToCart = (Addproduct) => {
      setCart((prevCart) => [...prevCart, Addproduct]);
    };


    // const product = [
    //     {
    //         id : 1,
    //         image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    //         name:'kishdfbfbdfban',
    //         description:'hellcgjfyjjjjfjfjjfjjo deshlsk',
    //         price:23
    //     },
    //     {
    //         id : 2,
    //         image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    //         name:'kishan',
    //         description:'hellgjfgjgfjfgjfgjfgjfgjfgjfjjfjfgo deshlsk',
    //         price:24
    //     },
    //     {
    //         id : 3,
    //         image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    //         name:'kisxcvxxxxbhan',
    //         description:'hellocgcjgjgfhggfdhjfgjhfhjfjfg deshlsk',
    //         price:25
    //     },
    //     {
    //         id : 4,
    //         image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    //         name:'kisv vncncncvncnhan',
    //         description:'hello ccgncgncgncfgfcmfmvncnvncdeshlsk',
    //         price:26
    //     },
    //     {
    //         id : 5,
    //         image:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    //         name:'kiscvbxbxbxbvbcbchan',
    //         description:'hello cbhhdhhdefhjffhfhgshlsk',
    //         price:27
    //     }
    // ]
    const [product, setProduct] = useState([])



   useEffect(() => {
    const getProduct = async() => {
        let getP = await fetch('https://fakestoreapi.com/products')
         getP = await getP.json()
        console.log('getP',(getP));
         setProduct(getP)
         console.log('product',product);
        }
        getProduct()
   },[])
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
                <Route path='/cart' element={<Addtocart cart={cart}/>}></Route>
                <Route path='/product/:id' element={<Productdeatail productCart={product} addToCart={addToCart}/>}></Route>

            </Routes>
            <Footer/>
        </BrowserRouter>
        
        </>
    )

}

export default App;