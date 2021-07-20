import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { Weekly } from './Components/Weekly';

import  { R_Panel } from './Components/R_Panel';
import  { L_Panel } from './Components/L_Panel';
import  { Feed } from './Components/Feed';

import Navigate from './Navigate';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(


  <React.StrictMode class="">
    <Navigate />
    <App />
    <br></br>



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
