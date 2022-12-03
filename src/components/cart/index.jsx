import React, {useEffect, useState} from "react";
import Items from "../items";
import {useDispatch, useSelector} from "react-redux";

export default function Cart(){
    const [items,setitems] = useState([])
    const [view,setView]=useState("none")
    const [numbers,setnumbers]=useState()
    const [Delete,setDelete]=useState(false)
    const [all,setAll]=useState(false)
    const cart = useSelector(state=>state.itemsCart.items)
    useEffect(()=>{
        setitems(cart)
    },[ ])
    const dispatch = useDispatch();
    useEffect(()=>{
    if(Delete){
        items.splice(numbers,1)
        setView("none")
        setnumbers('')
        setDelete(false)
        dispatch({
            type:'UPDATE',
            payload: items
        })
    }
    if(all){
        setitems([])
        setAll(false)
        dispatch({type:'Delete-All'})

    }
    },[all,Delete])
    const deleteitem=(nums)=>{
        setView("block")
        setnumbers(nums)
    }
    const no=()=>{
        setView("none")
        setnumbers('')
    }
    const yes=()=>{
        setDelete(true)
    }
    const deleteall=()=>{
        setAll(true)
    }

    return <section>
        <div>
            <button onClick={deleteall}>delete all items</button>
        </div>
        <div className='G-container G-flex-wrap item-list'>
            {items.map((items,index)=>(<Items
                item={items}
                key={index}
                nums={index}
                deleteitem={deleteitem}
            />))}
        </div>
        <div style={{display :view }} className={"dleting-div"}>
            <p>Are you sure you want to delete this num ?</p>
            <button onClick={yes}>yes</button>
            <button onClick={no}>no</button>
        </div>
    </section>
}