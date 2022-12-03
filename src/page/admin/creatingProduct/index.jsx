import React, {useState} from "react";

export default function CreatingProduct(){
    const[theinputs,setTheinputs]=useState({
        name :'',
        price : '',
        pics :[],
        description : ''
    })

    const change=(e)=>{
        if(e.target.name !== 'pics'){
            setTheinputs({...theinputs,[e.target.name] : e.target.value})
        }else {
            setTheinputs({...theinputs,description : [...theinputs.description , e.target.value]})
        }
        console.log(theinputs)
    }
    return <div className='set-product'>
        <form>
            <div>
              <label>
                  <span>enter name</span>
                  <input type="text" value={theinputs.name} name='name' onChange={change}/>
              </label>
            </div>
            <div>
              <label>
                  <span>enter price</span>
                  <input type="number" value={theinputs.price} name='price' onChange={change}/>
              </label>
            </div>
            <div>
              <label>
                  <span>enter picture</span>
                  <input type="file" value={theinputs.pics} name='pics' onChange={change}/>
              </label>
            </div>
            <div>
              <label>
                  <span>enter description</span>
                  <input type="text" value={theinputs.description} name='description' onChange={change}/>
              </label>
            </div>
        </form>
    </div>
}