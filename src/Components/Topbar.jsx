import React from 'react'
import "./Style.css"
import logo from "../Assets/logo.png"
const Topbar = () => {
    return (
        <div className="topbar">
            <div class="search-container">
                <input type="text" placeholder="Search here" />
                <button type="submit"><i class="fas fa-search"></i></button>

            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="login">
                <p>Registor/Login </p>
                <i className="fa-regular fa-heart icons"></i>
                <i className="fa-solid fa-cart-shopping icons"></i>
         
            </div>





        </div>
    )
}

export default Topbar
