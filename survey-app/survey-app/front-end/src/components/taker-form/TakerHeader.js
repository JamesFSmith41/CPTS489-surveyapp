import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import './TakerHeader.css';

export default function TakerHeader()
{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dongtian', 'template_dongtian', form.current, 'g7HhDXP32Q-7VYtsS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
      }
    

    let navigate = useNavigate();
    
    return (
        <div className="header">
            <div className="header_info">
                <img src={require('../../images/home-icon.png')} className="home-icon"
                onClick = {()=> {navigate("/homepage")}}/>
                <text className="header-title-text">
                    SURVEY TAKER
                </text>
            </div>
            <div className="header-right">
                <img src={require('../../images/profile-icon.png')} className="profile-icon"/>
                
            </div>
        </div>
    )
}