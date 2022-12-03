import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./page/home";
import Header from "./components/header";
import Cart from "./components/cart";


export default function App(){
    return <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            {/*<Route path='/' element={<Home/>}/>*/}
            {/*<Route path='/' element={<Home/>}/>*/}
        </Routes>
    </>
}