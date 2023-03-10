import React, {useState} from 'react'
import QuestionHeader from './SurveyHeader.js'
import QuestionTab from '../survey-functionality/SurveyQuestionSection/QuestionTab.js'
import NewField from '../survey-functionality/SurveyQuestionSection/SurveyQuestionFields.js'
import './SurveyMain.css';
import { nanoid } from 'nanoid'
import QuestionFieldList from '../survey-functionality/SurveyQuestionSection/QuestionFieldList.js';

function SurveyQuestionMain({survey_title}) {
  const [surveyName, setSurveyName] = useState();
  const [showSurvey, setShowSurvey] = useState(false);

  const [questions, setQuestions] = useState([
    {
        id: nanoid(),
        question_title: "Question 1",
        question_type: "radio",
        option_list: [
          {option_text: "hello", id:nanoid()},
          {option_text: "world",  id:nanoid()}
        ],
        image: "",
        video: "",
        required: true
    },
    {
        id: nanoid(),
        question_title: "Question 2",
        question_type: "checkbox",
        option_list: [
          {option_text: "hello", id:nanoid()},
          {option_text: "world", id:nanoid()}
        ],
        image: "",
        video: "",
        required: false
    },
    {
        id: nanoid(),
        question_title: "Question 3",
        question_type: "textbox",
        option_list: [],
        image: "",
        video: "",
        required: true
    },
    {
      id: nanoid(),
      question_title: "Question 4",
      question_type: "dropdown",
      option_list: [
        {option_text: "hello", id:nanoid()},
        {option_text: "world", id:nanoid()}
      ],
      image: "",
      video: "",
      required: false
  }
    ]);

    const onClick = () => setShowSurvey(true);

    const addQuestion = (title,type,list,image,video,required) => {
      const newQuestion = {
        id: nanoid(),
        question_title: title,
        question_type: type,
        option_list: list,
        image:image,
        video:video,
        required:required
      }

      const newQuestions = [...questions, newQuestion];
      setQuestions(newQuestions)
      console.log(newQuestion)
    }

    const deleteQuestion = (id) => {
      const newQuestions = questions.filter((question) => question.id !== id);
      setQuestions(newQuestions);
    }

    return (
      <div>
        <QuestionHeader/>
        <QuestionTab/>
        <div classname = "form">
            <div classname = "form_title">
              <div className="survey-wrapper">
                <input className="survey-name"
                  placeholder = "Untitled Survey"
                  onChange={e => setSurveyName(e.target.value)}
                />
                <button className="survey-button"
                    type = "submit"
                    variant = "contained"
                    onClick={onClick}
                    >
                      Create New Survey
                </button>
                <div>
                  { showSurvey ? 
                  <QuestionFieldList 
                  questions = {questions} 
                  handleAddQuestion = {addQuestion}
                  handleDeleteQuestion = {deleteQuestion}
                  />
                    : null }     
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
export default SurveyQuestionMain;
  