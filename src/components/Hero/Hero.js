import React, {useRef, useState} from 'react';
import './Hero.css';
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
import {Link} from 'react-scroll';


import Popup from "../PopUp/Popup";

const Hero = () => {

    const [buttonPopup, setButtonPopup] = useState(false);


    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768;


    return (
        <div className="hero">
            <Popup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}>
            </Popup>

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>

                <div className="the-best-ad">
                    <motion.div
                    initial={{left: mobile ? '215' : '280px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type:'tween'}}
                    ></motion.div>
                    <span>TornadoGym TornadoGym TornadoGym</span>
                </div>
                {/*-----------------*/}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Mükəmməl </span>
                        <span>bədənə</span>
                    </div>
                    <div>
                        <span>sah<span style={{textTransform: "lowercase"}}>i</span>b olun</span>
                    </div>
                    <div>
                        <span>
                        Sağlamlıqınızı ve bədən quruluşunuzu Tornado Gym-ə həvalə edin!
                        </span>
                    </div>
                </div>
                {/*-----------------*/}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay="4" preFix="+"/>
                        </span>
                        <span>Hazır proqramlar</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay="4" preFix="+"/>
                        </span>
                        <span>ÜZVLƏR QOŞULDU</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay="4" preFix="+"/>
                        </span>
                        <span>EXPERT MƏŞQÇİLƏR</span>
                    </div>
                </div>
                {/*-----------------*/}
                <div className="hero-buttons">
                    <button className="btn"
                        onClick={() => setButtonPopup(true)} style={{textTransform: "uppercase"}}>ünvan</button>
                    <button className="btn"><Link
                        activeClass='active'
                        to='Join'
                        spy={true}
                        smooth={true}
                    >Əlaqə</Link></button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn button-effect" style={{display: "none"}}>Qoşulun</button>
                <motion.div
                    initial={{right: '-1rem'}}
                    whileInView={{right: '4rem'}}
                    transition={transition}
                    className="heart-rate">

                    <img src={Heart} alt=""/>
                    <span>Ürək döyüntüsü</span>
                    <span>116 d/dəq</span>
                </motion.div>

                {/*--------hero img---------*/}
                <img src={hero_image} alt="" className="hero-image"/>
                <motion.img
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back"/>

                {/*--------calories---------*/}
                <motion.div
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transition}
                    className="calories">

                    <img src={Calories} alt=""/>
                    <div>
                        <span>Yandırılan Kalori</span>
                        <span>220 Kkal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;