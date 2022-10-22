import React, {useState} from 'react';
import './Coaches.css'
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from "framer-motion";

const Coaches = () => {

    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="Coaches" id="coaches">
            <div className="left-c">
                <span>Təl<strong style={{textTransform: "lowercase", fontSize: "1.1rem"}}>i</strong>mç<strong style={{textTransform: "lowercase", fontSize: "1.1rem"}}>i</strong>lər</span>
                <span className="stroke-text">məşqç<strong style={{textTransform: "lowercase"}}>i</strong>lər<strong style={{textTransform: "lowercase"}}>i</strong>m<strong style={{textTransform: "lowercase"}}>i</strong>zlə</span>
                <span>tanış olun</span>
                <motion.span
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    {testimonialsData[selected].name} - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-c">
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{...transition, duration: 2}}
                ></motion.div>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{...transition, duration: 2}}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity:1, x: 0}}
                    exit={{opacity:0, x: -100}}
                    transition={transition}
                    src={testimonialsData[selected].image} alt=""/>

                <div className="arrows">
                    <img
                        onClick={()=>{
                            selected === 0
                            ? setSelected(tLength - 1)
                            :setSelected((prev)=> prev - 1);
                        }}
                        src={leftArrow} alt=""/>
                    <img
                        onClick={()=>{
                            selected === tLength - 1
                            ? setSelected(0)
                            : setSelected((prev)=> prev + 1);
                        }}
                        src={rightArrow} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Coaches;