import React from 'react';
import './SurveyContent.css';

export function SurveyContent(surveyName, userName, content)
{
    return( 
        <div>
            <div className="survey-container">
                <text className="survey-text">
                    Survey Name: {surveyName}
                </text>
                <text className="survey-text">
                    Username: {userName}
                </text>
                <text className="survey-text">
                    content: {content}
                </text>
            </div> 
        </div>
    )
}