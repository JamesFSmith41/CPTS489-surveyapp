import React, {useState} from 'react';
import './SurveyBar.css';

function SurveyBar(){
    return (
        <div className = "form">
            <div className = "owned_form">
                <div className="created-surveys">
                    <text className="survey-title-text">
                        CREATED SURVEY
                        </text>
                        <text className="survey-date-text">
                            10/17/2022
                        </text> 
                    <button className="edit-survey-button">
                            EDIT
                        </button>
                    <button className="delete-survey-button">
                                DELETE
                        <img src={require('../../images/delete-icon.png')} className="delete-icon"/>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default SurveyBar