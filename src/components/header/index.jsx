import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";
import cart from '../../assets/images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg'
import home from '../../assets/images/home_FILL0_wght400_GRAD0_opsz48.svg'

export default function Header(){
    return <header>
        <div className='G-container G-justify-between'>
            <h1>im theheader</h1>
            <ul className='G-flex '>
                <li>
                    <Link to='/'>
                        <img src={home} alt="home"/>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <img src={cart} alt="cart"/>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
}