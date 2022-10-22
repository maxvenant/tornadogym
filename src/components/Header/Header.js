import React, {useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import {Link} from 'react-scroll';

const Header = () => {

    const mobile = window.innerWidth <= 768;
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className="header" id="Header">
            <div className="logo-wrapper">
                <img src={Logo} className="logo" alt=""/>
                <span className="stroke-text">TORNADO GYM</span>
                <hr/>
            </div>

            {menuOpened === false && mobile === true ? (
                <div className="burger"
                onClick={()=> setMenuOpened(true)}


                >
                    <img src={Bars} alt=""/>
                </div>
            ) : (
                <ul className="header-menu">
                    <li><Link
                        onClick={()=> setMenuOpened(false)}
                        activeClass='active'
                        to='Header'
                        spy={true}
                        smooth={true}
                        >İlkin</Link></li>
                    <li><Link
                        onClick={()=> setMenuOpened(false)}
                        to='programs'
                        spy={true}
                        smooth={true}
                        >Proqramlar</Link></li>
                    <li><Link
                        onClick={()=> setMenuOpened(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}
                    >Haqqımızda</Link></li>
                    <li><Link
                        onClick={()=> setMenuOpened(false)}
                        to='Plans'
                        spy={true}
                        smooth={true}
                    >Qiymətlər</Link></li>
                    <li><Link
                        onClick={()=> setMenuOpened(false)}
                        to='coaches'
                        spy={true}
                        smooth={true}
                    >Təlimçilər</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Header;