import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.scss"
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {combineReducers,createStore} from 'redux'
import {Provider } from "react-redux"

import tabs from './assets/images/tab.jpg'
import phone from './assets/images/phone.jpg'
import pc from './assets/images/pc.jpg'
import laptop from './assets/images/laptop.jpg'
import earbuds from './assets/images/earbuds.jpg'

const items=(state={
    items : [
        {
            name:'tab',
            price:'100',
            img : tabs,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'phone',
            price:'100',
            img : phone,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'pc',
            price:'100',
            img : pc,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'laptop',
            price:'100',
            img : laptop,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'ear buds',
            price:'100',
            img : earbuds,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'tab',
            price:'100',
            img : tabs,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'phone',
            price:'100',
            img : phone,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'pc',
            price:'100',
            img : pc,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'laptop',
            price:'100',
            img : laptop,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'ear buds',
            price:'100',
            img : earbuds,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'tab',
            price:'100',
            img : tabs,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'phone',
            price:'100',
            img : phone,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'pc',
            price:'100',
            img : pc,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'laptop',
            price:'100',
            img : laptop,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'ear buds',
            price:'100',
            img : earbuds,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'tab',
            price:'100',
            img : tabs,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'phone',
            price:'100',
            img : phone,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'pc',
            price:'100',
            img : pc,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'laptop',
            price:'100',
            img : laptop,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name:'ear buds',
            price:'100',
            img : earbuds,
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        {
            name: 'tab',
            price: '100',
            img: tabs,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maxime.',
        },
        ]
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>
);
