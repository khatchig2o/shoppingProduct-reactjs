import React, {useState} from "react";
import Items from "../../components/items"
import {useDispatch, useSelector} from "react-redux";

export default function Home(){
    const items = useSelector(state=>state.items.items)
    const cart = useSelector(state=>state.itemsCart.items)
    const dispatch = useDispatch()

    const getIndex=(index)=>{
        dispatch({
            type:'ADD-item',
            payload : items[index]
        })
        console.log(index,items[index])
    }

    return <section className='G-container'>
        <div className='G-flex-wrap item-list'>
            {items.map((item,index)=>(
                <Items
                    item={item}
                    key={index}
                    nums={index}
                    addtocart={getIndex}
            />))}
        </div>
    </section>
}