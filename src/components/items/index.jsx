import React, {useEffect, useState} from "react";
import './index.scss'

export default function Items({item,deleteitem,nums,addtocart}){
    const[availebel,setavailebel]=useState(false)
    const[rates,setrates]=useState([])
    const [empty,setempty]=useState([])

    useEffect(()=>{
        if(item.title &&item.image &&item.description &&item.price){
            setavailebel(true)
            ratingStars()
        }
    },[])


    const ratingStars=()=>{
        let rate =Math.floor(item.rating.rate);
        let arr =[]
        let arrs = []
        let i = 0
        for( i; i < rate ; i++){
            arr.push(`full`)
        }
        setrates(arr)
        for( let j = 0; j <  5 - i ; j++){
            arrs.push(`empty`)
        }
        setempty(arrs)
    }
    //category: "men's clothing"
    // description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    // id: 1
    // image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    // price:109.95
    // rating: {rate: 3.9, count: 120}
    // title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    return <>
        {/*{console.log(item.rating.rate)}*/}
        {availebel ?
            <div className='items'>
                <h1  className='title'>{item.title}</h1>
                <div className='P-item-img' style={{backgroundImage : `url(${item.image})`}} />
                <p   className='description'>{item.description}</p>
                <div className='G-flex rating' >
                    {rates.map((star,index)=>(
                        <div className='star' key={index}>&#9733;</div>
                    ))}
                    {empty.map((star,index)=>(
                        <div className='star' key={index}>&#9734;</div>
                    ))}
                    <p >{item.rating.count}</p>
                </div>
                <div className='p-flex'>
                    <p className='price'> price : {item.price}$</p>
                    {deleteitem ?<button className={"div-exit"} onClick={()=> deleteitem(nums)}>remove from cart</button> : addtocart ? <button className={"div-exit"} onClick={()=> addtocart(nums)}>add to cart</button> : null}
                </div>
            </div>
            :
            <p>item not found</p>}
    </>
}