import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Calculator from './components/Calculator'
import Login from './components/Login'
import Registration from './components/Registration'
import {ContextAPI} from './ContextAPI'
import IContextAPI from './Interfaces/ContextAPI'
import 'bootstrap/dist/css/bootstrap.css'




const registeredUsers = JSON.parse(localStorage.getItem('registered users') || '')
// const abc = [{
//    firstname: "sunday",
//     lastname: "uche",
//     email: "abc@jj",
//     username: "jjjsnkhskjlnjcnjnjdnjddn",
//     password: "kiki",
//     confirmPassword: "1233"
// }]


ReactDOM.render(
  <React.StrictMode>
    <ContextAPI.Provider value ={registeredUsers} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Calculator/>} />
            <Route path="/register" element={<Registration/>} />
          </Routes>
        </BrowserRouter>
    </ContextAPI.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
