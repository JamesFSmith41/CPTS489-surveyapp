import React, {useState} from 'react'
import {questionFieldDatabase} from '../question-form/survey-functionality/SurveyQuestionSection//SurveyGenerator.js';
import "./TakerQuestionFields.css";
import { MdInsertPhoto,MdVideoCameraBack,MdOutlineAdd } from "react-icons/md";
import CheckQuestion from "../question-form/survey-functionality/SurveyQuestionSection//QuestionTypes/CheckOption/CheckQuestion";
import TextQuestion from "../question-form/survey-functionality/SurveyQuestionSection//QuestionTypes/TextOption/TextQuestion";
import RadioQuestionList from "../question-form/survey-functionality/SurveyQuestionSection//QuestionTypes/RadioOption/RadioQuestionList";
import CheckQuestionList from "../question-form/survey-functionality/SurveyQuestionSection//QuestionTypes/CheckOption/CheckQuestionList";
import MappedDropdown from '../question-form/survey-functionality/SurveyQuestionSection//QuestionTypes/DropdownOption/MappedDropdown.js';


export default function NewField({id, question_title, question_type, option_list,image, video, required, handleDeleteQuestion}){


    return(
        <div className = "field">
            <div className="question-field-box">
                <div className = "question-type-row">
                    {image.length>0 ? <img className="img-fluid" src={image} alt="" /> : null}
                    
                    {video.length>0 ? <video width="320" height="240" controls>
                        <source src={video} type="video/mp4"/>
                    </video> : null}
                    
                    {required ? <span className = "span">*Required</span>:null}
                    <div className = "question-title">
                        <span>{question_title}</span>              
                    </div>
                </div>
                {question_type === "radio" && 
                <RadioQuestionList 
                options = {option_list}
                />}

                {question_type === "checkbox" && 
                <CheckQuestionList
                options = {option_list}/>
                }
                {question_type === "textbox" && <TextQuestion/>}

                {question_type === "dropdown" && 
                <MappedDropdown
                options = {option_list}
                />
                }
            </div>  
        </div>
    );
}
