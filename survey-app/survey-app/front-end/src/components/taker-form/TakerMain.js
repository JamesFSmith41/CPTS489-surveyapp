import TakerQuestionList from "./TakerQuestionList";
import SurveyMain from "../question-form/main-question-page/SurveyMain";
import TakerHeader from './TakerHeader.js'
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { nanoid } from 'nanoid'
import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import './TakerMain.css';
import PullSurvey from "../homepage/PullSurvey";


function TakerMain() {

    let navigate = useNavigate();
    const location = useLocation();
    const [questions2] = useState([]);
    //const questions = useContext(SurveyQuestionMain); 
    const survey = location.state.survey;
    const test = location.state.testvar;
    console.log(survey.surveyName);
    //const questions = null 
    let addQuestion = useContext(SurveyMain);
    let deleteQuestion = useContext(SurveyMain);

      const handleSave = () => {

      }

      const handleClick = () => {
        handleSave();
        navigate("/homepage");
      }
    return (
      <>
        <TakerHeader/>
        <div className="survey-wrapper">
          <p className="survey-title">
            {survey.surveyName}
          </p>
          {<TakerQuestionList
            questions = {survey.surveyQuestions} 
            handleAddQuestion = {addQuestion}
            handleDeleteQuestion = {deleteQuestion}/>}
          {/* { location.state.questions ? 
          <TakerQuestionList
            questions = {questions} 
            handleAddQuestion = {addQuestion}
            handleDeleteQuestion = {deleteQuestion}/>
            :
            <div>
          <TakerQuestionList
            questions = {questions2} 
            handleAddQuestion = {null}
            handleDeleteQuestion = {null}/>
            Sorry nothing
            </div>
          } */}

            <button className="survey-button" type="submit" onClick={handleClick}>
              Save Responses
            </button>

        </div>
      </>
    );
    
}

export default TakerMain