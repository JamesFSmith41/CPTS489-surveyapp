import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './PendingSurveys.css'
import {Link} from 'react-router-dom';
import { nanoid } from 'nanoid'
import PullSurvey from './PullSurvey';
import axios from "axios";
import useFetchSurvey from '../RenderingHooks/LoadSurveyHook';



export default function PendingBar(name){
    
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
        let surveyInfo =
        {
            surveyName: name
        }
        
        console.log(surveyInfo);
        await axios
        .post("http://localhost:8000/getSurvey", surveyInfo)
            .then(response =>   {
                setSurvey(response.data);
                console.log(response.data)
                });
    }
   
    useEffect(() => {
        console.log("useEffect ran");
        console.log(name);
        LoadSurvey();
    },  [] // <-- empty dependency array
    ); 
    

    const [survey, setSurvey] = useState();
    const [loading, data, error] = useFetchSurvey(name, []);

    let navigate = useNavigate();
    
    
    <Link
        to="/taker"
        state={{
            survey: data,
            testVar: "testvar"
        }}
            />
    return (
        <div className = "pending-survey-wrapper">
            <text className="survey-title-text">
                {loading ? "Loading Survey" : survey.surveyName}
            </text>
            
            <text className = "survey-date-text">
            {loading ? "Loading Survey" : survey.created}
            </text>
            <button  class="answer-button"
                onClick = {NavigateTaker}>
                ANSWER
                <img src={require('../../images/survey-icon.png')} className="survey-icon"/>
            </button>
        </div>
    );
}