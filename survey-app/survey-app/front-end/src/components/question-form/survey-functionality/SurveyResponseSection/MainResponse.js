import React, {useState} from 'react'
import QuestionHeader from '../../main-question-page/SurveyHeader.js'
import QuestionTab from '../SurveyQuestionSection/QuestionTab.js'
import SurveyResponse from './SurveyResponse.js'
import './MainResponse.css'

export default function MainRes() {
  const [surveyName, setSurveyName] = useState("");
  const [showSurvey, setShowSurvey] = useState(false)
  const onClick = () => setShowSurvey(true);
  
  const [reponseSlider, setAcceptingReponses] = useState("true");
  const responseTotal = 10;

  
    return (
      <div>
        <QuestionHeader/>
        <QuestionTab/>
        <div classname = "response-container">
            <div classname = "response-container-header">
              <div className="response-box"
                display ="flex" 
                flexDirection={"column"}>
                  <div className = "main_text">
                    <text class="response-header-text">
                      {responseTotal} RESPONSES
                    </text>
                    <div className = "slider">
                      <text className="accepting-response-text">
                        ACCEPTING RESPONSES      
                      </text>
                      <input
                       className="slider-bar"
                       type="range"
                        min="0"
                        max="1"
                        step="1"
                        id="slider-value"
                        onChange={() => setAcceptingReponses(reponseSlider ? "true" : "false")}
                        /> 
                        <label className="response-label">{reponseSlider}</label>
                    </div>
                  </div>
                  <div>
                    <SurveyResponse/>    
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }