import React, {useState} from 'react'
import {questionFieldDatabase} from './SurveyGenerator.js';
import "./SurveyQuestionFields.css";
import { MdInsertPhoto,MdVideoCameraBack,MdOutlineAdd } from "react-icons/md";
import CheckQuestion from "./QuestionTypes/CheckOption/CheckQuestion";
import TextQuestion from "./QuestionTypes/TextOption/TextQuestion";
import RadioQuestionList from "./QuestionTypes/RadioOption/RadioQuestionList";
import CheckQuestionList from "./QuestionTypes/CheckOption/CheckQuestionList";
import MappedDropdown from './QuestionTypes/DropdownOption/MappedDropdown.js';


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
                <div className = "survey-question-button-row">

                    <div className = "delete-question"> 
                        <button className="delete-question-button"
                        onClick = {()=>handleDeleteQuestion(id)}
                        >
                                    Delete
                            </button>
                    </div>
                </div>
            </div>
    );
}
