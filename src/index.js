import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import 'bulma/css/bulma.css';
import './styles.scss';

// installed all the dependencies and imported tem and
import { createStore } from 'redux';
import { Provider }from 'react-redux';

function reducerTitle(){
    return{
        title: 'Welcome to the redux store! Enjoy!'
        
    }
}
const store= createStore(reducerTitle)
console.log("this is store ", store);
console.log("this is tt", reducerTitle);
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
