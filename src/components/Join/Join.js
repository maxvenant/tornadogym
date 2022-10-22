import React, {useRef, useState} from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';


const Join = () => {

    const [favorite,setFavorite]=useState(false)

    const [inputValue, setInputValue] = useState('');
    const handleInput = e => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputValue(formattedPhoneNumber);
    };
    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumber.length < 4) return phoneNumber;
        if (phoneNumber.length < 7) {
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(
            3,
            6,
        )} - ${phoneNumber.slice(6, 10)}`;
    }


    /*main code.............*/
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_afw3sd7', 'template_wrgmdtn', form.current, '-HXVEG73CX3Ex5njE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Join" id="join-us" >
            <div className="left-j">
                <hr/>
                <div>
                    <span className="stroke-text ">nömrən<span style={{textTransform: "lowercase"}}>i</span>z<span style={{textTransform: "lowercase"}}>i</span></span>
                    <span>yazın</span>
                </div>
                <div>
                    <span>b<span style={{textTransform: "lowercase"}}>i</span>z</span>
                    <span className="stroke-text ">zəng edəcəy<span style={{textTransform: "lowercase"}}>i</span>k</span>
                </div>
            </div>
            <div className="right-j">
                <div className="blur join-blur"></div>
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input
                        onChange={e => handleInput(e)} value={inputValue}
                        type="text" name="user-email" placeholder="Nömrənizi dahil edin"/>
                    <button className="btn btn-j button-effect"
                            onClick={()=>{setFavorite(true)}}
                            style={{backgroundColor:favorite===true?"green":""}}
                    >Qoşulun</button>
                </form>
            </div>
            <div></div>

        </div>
    );
};

export default Join;