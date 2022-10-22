import React from 'react';
import './Footer.css'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'
import Tg from '../../assets/tg.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <img src={Youtube} alt=""/>
                    <a href="https://instagram.com/_tornado_gym/" target="_blank" rel="noreferrer"><img src={Instagram} alt=""/></a>
                    <img src={Tg} alt=""/>
                </div>
                <div className="address stroke-text">
                    <span>Ünvan: Aga Neymətulla küçəsi (keçmiş Nerimanov məhkəməsinin arxası)</span>
                    <span>Əlaqə: (012)567-4589</span>
                    <span>Mob: (070)367-4589 </span>
                    <span>Mob: (077)525-5550 </span>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt=""/>
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;