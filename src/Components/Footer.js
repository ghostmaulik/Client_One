import React from 'react'
import {FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagramSquare, FaInstagram } from 'react-icons/fa';

export default class MyFooter extends React.Component {
    render() {
        return (
            <div>
                <div className="footer">
                   
                    <div>
                        <FaEnvelope/> Email:
                    </div>
                    <div>
                        <FaPhone/> Call:
                    </div>
                    <div>
                        <FaFacebookF style={{fontSize:"30px",margin:"0px 10px"}} /> 
                        <FaTwitter style={{fontSize:"30px",margin:"0px 10px"}} /> 
                        <FaInstagram style={{fontSize:"30px",margin:"0px 10px"}} />
                    </div>
                </div>  
            </div>
        )
    }
}