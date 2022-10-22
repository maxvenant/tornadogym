import React from 'react';
import './Popup.css';
import map from '../../assets/map.png'

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <img src={map} alt=""/>
                <button className="close-btn"
                    onClick={() => props.setTrigger(false)}
                >CLose</button>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default Popup;