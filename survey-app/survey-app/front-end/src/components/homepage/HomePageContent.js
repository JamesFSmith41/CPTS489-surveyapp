import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SurveyBar from "./SurveyBar.js"
import PendingSurveys from "./PendingSurveys.js"
import "./HomePageContent.css"

export default function MidBody(){
    let navigate = useNavigate();
    
    const [newForm, setNewForm] =useState(false);
    
    const [isNotPending, setIsNotPending] =useState(true);

    const startForm = (e) =>{
        setNewForm(!newForm)
        navigate("/creator/question")
    }

    const filterPending = (e) =>{
        setIsNotPending(!isNotPending)
    }
    return(
        <div className = "homepage-content-wrapper">
            <div className="buttons">
                <button className="homepage-buttons"
                    onClick = {startForm}>
                    START A NEW SURVEY
                    <img src={require('../../images/add-icon.png')} className="add-icon"/>
                </button>
                <button className="homepage-buttons"
                    onClick = {filterPending}>
                        {isNotPending ? "ANSWER PENDING SURVEYS" : "VIEW ALL SURVEYS"}
                        <img src={require('../../images/survey-icon.png')} className="survey-icon"/>
                </button>
            </div>
            <div className = "bar">
                {isNotPending && <SurveyBar/>}
                <PendingSurveys/>
            </div>
        </div>
    )
}
