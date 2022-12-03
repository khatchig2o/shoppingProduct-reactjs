import React from "react";
import "./index.scss"
import CreatingProduct from "./creatingProduct";
import {Routes, Route, Link} from "react-router-dom";
import AdminHome from "./adminHome";

export default function Admin(){
    return <div className='p-admin-page'>
        <div className='p-admin-header'>
            <h1>im the header</h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/create-new-product'}>Create new product</Link>
                </li>
            </ul>
        </div>
    <Routes>
        <Route path='/' element={<AdminHome/>}/>
        <Route path='/create-new-product' element={<CreatingProduct/>}/>
    </Routes>
    </div>
}