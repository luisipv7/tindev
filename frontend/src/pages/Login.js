import React from 'react';
import logo from '../assets/tindev.svg';
import './login.css';

export default function Login() {
    return ( <
        div className = "login-container" >
        <form >
        <img src = { logo } alt = "Tindev"/>

        <input placeholder = "Digite seu usuário do Github"/>
        <button type = "submit" > Enviar </button>
        </form>

        </div> 



    );
}