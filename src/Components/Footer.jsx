import React from 'react'
import "./Style.css"
import companylogo from "../Assets/logo.png"
const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer__section">
                <div className="company__logo uni__margin">
                    <img src={companylogo} alt="" />
                </div>
                <div className="company__name uni__margin">
                    <h3>american food </h3>
                    <h4>the best food</h4>
                </div>
                <div className="social__links uni__margin">
                    <li className="fa fa-instagram fab"></li>
                    <li className="fa fa-facebook fab"></li>
                    <li className="fa fa-twitter fab"></li>
                    <li className="fa fa-whatsapp fab"></li>
                </div>
                <div className="website__links">
                    websitelinks
                </div>
            </div>

        </div>
    )
}

export default Footer
