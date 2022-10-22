import React from 'react';
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import {Link} from 'react-scroll';

const Plans = () => {
    return (
        <div className="plans-container" id="Plans">

            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>

            <div className="programs-header" style={{gap: '2rem'}}>
                <span className="stroke-text">başlamaq</span>
                <span>fürsət<strong style={{textTransform: "lowercase"}}>i</strong></span>
                <span className="stroke-text">qaçırmayın</span>
            </div>

            <div className="plans">
                {plansData.map((plan, index)=>(
                    <div className="plan" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>₼ {plan.price }</span>

                        <div className="features">
                            {plan.features.map((feature, index)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt=""/>
                                    <span key={index}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>Daha ətraflı -></span>
                        </div>
                        <button className="btn"><Link
                            activeClass='active'
                            to='Join'
                            spy={true}
                            smooth={true}
                        >Tezliklə qoşulun</Link></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;