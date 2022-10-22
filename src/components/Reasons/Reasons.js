import React from 'react';
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
            </div>
            <div className="right-r">
                <span>Haqqimizda</span>
                <div>
                    <span className="stroke-text">Tornado</span>
                    <span> zalinin üstünlüklər<span style={{textTransform: "lowercase"}}>i</span> </span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt=""/>
                        <span>Ayri-ayriliqda qadin və kiş<span style={{textTransform: "lowercase"}}>i</span> zallari</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>"X-line" müas<span style={{textTransform: "lowercase"}}>i</span>r standartlara uygun avadanliqlar</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>1c<span style={{textTransform: "lowercase"}}>i</span> mərtəbə- Qadin zali, <br/> 2c<span style={{textTransform: "lowercase"}}>i</span> mərtəbədə ümum<span style={{textTransform: "lowercase"}}>i</span>  böyük zal yerləş<span style={{textTransform: "lowercase"}}>i</span>r</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>Rahat havalandirma s<span style={{textTransform: "lowercase"}}>i</span>stem<span style={{textTransform: "lowercase"}}>i</span> və boks otagi</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span><span style={{textTransform: "lowercase"}}>i</span>dman q<span style={{textTransform: "lowercase"}}>i</span>dalarinin satişi və hazirlanmasi</span>
                    </div>
                </div>
                <span className="partners">Our partners</span>
                <div className="partnersImg">
                    <img src={nb} alt=""/>
                    <img src={adidas} alt=""/>
                    <img src={nike} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Reasons;