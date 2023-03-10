import React, {useState} from 'react';
import './PendingSurveys.css'

export default function PendingBar(){
    return (

        <div className = "pending-survey-wrapper">
            <text className="survey-title-text">
                UNTITLED SURVEY
            </text>
            
            <text className = "survey-date-text">
                10/17/2022
            </text>
            <button  class="answer-button">
                ANSWER
                <img src={require('../../images/survey-icon.png')} className="survey-icon"/>
            </button>
        </div>
    );
}