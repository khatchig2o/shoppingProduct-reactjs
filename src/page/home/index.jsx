import React, {useEffect, useState} from "react";
import Items from "../../components/items"
import {useDispatch, useSelector} from "react-redux";

export default function Home(){
    const items = useSelector(state=>state.items.items)
    const [activeTab,setActivetab]=useState("All")
    const[filteredProducts,setfilteredProducts]= useState([])
    const dispatch = useDispatch()
    const [navedat]=useState(["All","women's clothing","men's clothing","electronics"])


    const getIndex=(index)=>{
        dispatch({
            type:'ADD-item',
            payload : items[index]
        })
    }
    useEffect(()=>{
        selectProduct(activeTab)
    },[])
    const selectProduct = (productName) => {
        let arr= []
        if (productName !== 'All') {
            arr=items.filter(x => x.category === productName)
        } else {
            arr=items
        }
        setfilteredProducts(arr)
        setActivetab (productName)
    }

    return <section className='G-container'>
            <div className='G-justify-center p-filter '>
                <ul className='G-flex '>
                    {navedat.map((nav,index)=>(
                        <li key={index} className={(activeTab === nav ) ? 'active' : null}
                            onClick={() => selectProduct(nav)}>{nav}
                        </li>
                    ))}
                </ul>
            </div>
        <div className='G-flex-wrap item-list'>
            {filteredProducts.length ? filteredProducts.map((item,index)=>(
                <Items
                    item={item}
                    key={index}
                    nums={index}
                    addtocart={getIndex}
            />))
            : <p>loading ...</p>}
        </div>
    </section>
}