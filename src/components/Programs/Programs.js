import React from 'react';
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/*-----header-----*/}
            <div className="programs-header">
                <span className="stroke-text">B<strong style={{textTransform: "lowercase"}}>i</strong>z<strong style={{textTransform: "lowercase"}}>i</strong>m</span>
                <span>proqramlarımızı</span>
                <span className="stroke-text">sınayın</span>
            </div>

            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join now</span>
                            <img src={RightArrow} alt=""/>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Programs;