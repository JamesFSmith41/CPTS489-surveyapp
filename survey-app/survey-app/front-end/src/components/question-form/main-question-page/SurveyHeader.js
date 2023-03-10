import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import './SurveyHeader.css';

export default function SurveyHeader()
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
                <img src={require('../../../images/home-icon.png')} className="home-icon"
                onClick = {()=> {navigate("/homepage")}}/>
                <img src={require('../../../images/document-icon.png')} className="document-icon"/>
                <text className="header-title-text">
                    SURVEY CREATOR
                </text>
            </div>
            <div className="header-right">
                <button  className="send-button"
                        onClick = {openModal}>
                            SEND
                        </button>
                <img src={require('../../../images/profile-icon.png')} className="profile-icon"/>
                <Modal
                    className="send-modal"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    >
                    <div className="modal-wrapper">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="text-wrapper" >
                                <text className="modal-text-header">
                                    Send Survey
                                </text>
                                <input 
                                    name = "user_email"
                                    className="modal-input" 
                                    placeholder = "Email"/>
                                <input 
                                    name = "message" 
                                    className="modal-input" 
                                    placeholder = "Message"/>
                            </div>
                            <div className="modal-button-row">
                                <button className="modal-buttons"
                                onClick = {closeModal}>
                                    CLOSE
                                </button>
                                <button className="modal-buttons">
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}