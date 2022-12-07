import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/style/index.scss"
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {combineReducers,createStore} from 'redux'
import {Provider } from "react-redux"


const items=(state={
    items : []
    },action)=>{
    switch (action.type){
        case  'ADDITEM':
            state = {
                items : [...state.items,action.payload]
            }
            break;
        case 'REMOVEITEM':
            state = {
                items: state.items.splice(action.payload,1)
            }
            break;

        case 'fetch':
            state = {
                items : action.payload
            }
            break;
        default:
            break;
    }

    return state
}
const itemsCart=(state={items : [

    ]},action)=>{
    switch (action.type){
        case  'UPDATE':
            state = {
                items : action.payload,
            }
            break;
        case 'ADD-item':
            state={
                items: [...state.items,action.payload]
            }
            break;
        case 'Delete-All':
            state ={
                items: [],
            }
            break;
        default:
            break;
    }
    return state
}

const store = createStore(combineReducers({items,itemsCart}))
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        store.dispatch({
            type :'fetch',
            payload : json
        })
    })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    // </React.StrictMode>
);
