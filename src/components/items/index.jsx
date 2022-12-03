import React from "react";
import './index.scss'

export default function Items({item,deleteitem,nums,addtocart}){
    return <div className='items'>
        <h1>{item.name}</h1>
        {item.img ? <img src={item.img} alt=""/> : null}
        <p>{item.description}</p>
        <p>price {item.price}$</p>
        {deleteitem ?
            <button className={"div-exit"} onClick={()=> deleteitem(nums)}>remove from cart</button> :
        addtocart ? <button className={"div-exit"} onClick={()=> addtocart(nums)}>add to cart</button> : null}
    </div>
}