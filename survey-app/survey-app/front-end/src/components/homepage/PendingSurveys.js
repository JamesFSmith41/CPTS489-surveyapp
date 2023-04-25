import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './PendingSurveys.css'
import {Link} from 'react-router-dom';
import { nanoid } from 'nanoid'
import PullSurvey from './PullSurvey';
import axios from "axios";

export default function PendingBar(){
    
    
    function NavigateTaker()
    {
        navigate("/taker", {
            state:{
                id:1,
                name:'test', 
                survey: survey,
                testvar: "testvar"
            }})
    }

    async function LoadSurvey()
    {
        await axios
        .post("http://localhost:8000/getLastestSurvey")
            .then(response =>   {
                setSurvey(response.data);
                console.log(response.data)
                });
    }
   
    useEffect(() => {
        console.log("useEffect ran");
        LoadSurvey();
    },  []); 
    
    const [survey, setSurvey] = useState({surveyName:"", created: ""});
    
    let navigate = useNavigate();
    
    <Link
        to="/taker"
        state={{
            survey: survey,
            testVar: "testvar"
        }}
            />
    return (
        <div className = "pending-survey-wrapper">
            <text className="survey-title-text">
                {survey === null ? "Loading Survey" : survey.surveyName}
            </text>
            
            <text className = "survey-date-text">
            {survey === null ? "Loading Survey" : survey.created}
            </text>
            <button  class="answer-button"
                onClick = {NavigateTaker}>
                ANSWER
                <img src={require('../../images/survey-icon.png')} className="survey-icon"/>
            </button>
        </div>
    );
}