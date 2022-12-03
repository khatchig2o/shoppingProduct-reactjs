import React, {useState,useEffect} from "react";
import Items from "../../components/items"
import {useDispatch, useSelector} from "react-redux";

export default function Home(){
    const [products,setproducts]=useState([])
    const items = useSelector(state=>state.items.items)
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                setproducts(json)
                console.log(products)
            })
    },[])

    const getIndex=(index)=>{
        dispatch({
            type:'ADD-item',
            payload : products[index]
        })
    }



    return <section className='G-container'>
        <div className='G-flex-wrap item-list'>
            {products.map((item,index)=>(
                <Items
                    item={item}
                    key={index}
                    nums={index}
                    addtocart={getIndex}
            />))}
        </div>
    </section>
}