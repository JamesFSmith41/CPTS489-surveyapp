import React, {useState} from 'react'
import axios from 'axios';
import * as content from './SurveyContent.js';
import './SurveyResponseField.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import {Pie} from 'react-chartjs-2';
  
  ChartJS.register(
    ArcElement, Tooltip, Legend
    );
  

export default function NewField(surveyName){

    const data = {
        labels: ['One', 'Two','Three'],
        datasets: [
          {
            data: [3,6,9],
            backgroundColor: ['aqua', 'orange', 'purple']
          }
        ]
      };
    
      const options = {}
    

    const [fieldList, setFieldList] = useState([
        {question_field:"",
        surveyAnswer:""}
    ])

    const [optionList, setOptionList] = useState([
        {question_field:""}
    ])

    const handleFieldAdd = (index) => {
        fieldList[index-1].question_field = questionField;
        fieldList[index-1].surveyAnswer = responseField;
        console.log(surveyName.children[1])
        console.log(fieldList[index-1].question_field);
        console.log(fieldList[index-1].surveyAnswer);
        setFieldList([...fieldList,{question_field:"", surveyAnswer:""}])
    }

    const [questionField, setQuestionField] = useState("");
    const [responseField, setResponseField] = useState("");
    const [surveyOutput, setSurveyOutput] = useState("");
    const [name, setSurveyName] = useState("");

    async function getSurveyContent(name)
    {    
        const message =
        {
            operation: 'GET',
            name: name,
        }

        console.log(message);
        await axios
        .post("http://localhost:8000/getSurvey", message)
        .then(response => 
            {
                setSurveyOutput(content.SurveyContent(response.data[0].surveyName, response.data[0].userName, "test"))
            })
            .catch(err => console.error(err));
    
        //console.log(surveyContent);
       // setSurveyOutput(surveyContent);
    }

    function printArray(index)
    {
        let survey = []
        survey[0] = {operation: "CREATE"};
        survey[1] = {surveyName: surveyName.children[1]}
        fieldList[index-1].question_field = questionField;
        fieldList[index-1].surveyAnswer = responseField;
        console.log(fieldList[index-1].question_field);

        fieldList.forEach(function (item, i) {
            survey.push({"Survey_Question":{
                "Question": item.question_field,
                "User_Response": item.surveyAnswer,
            } })
        });
        console.log(survey);
        questionFieldDatabase(survey);
    }

    function printEach(message)
    {
        console.log(message.question_field);
    }
    async function questionFieldDatabase(survey)
    {
        let questionFieldMess;
        const message =
        {
            operation: 'CREATE',
            text: "text",

        }
        console.log("attempt to send message")
        await axios
        .post("http://localhost:8000/createSurvey", survey)
        .then((data) => questionFieldMess = data)
          .catch(err => console.error(err));

        console.log(questionFieldMess);
    }

    const handleFieldDel = (index) => {
        const list = [...fieldList];
        list.splice(index,1);
        setFieldList(list);
    }

    return(
        <>
        {fieldList.map((singleField,index) => (
        <div key = {index} className = "response-field-box">
            <div className='response_field'>
                <div className = "response-text-row">
                   <text className='response-header-text'>
                            WAITING FOR RESPONSES
                    </text>
                    <input className="survey-name-field"
                    placeholder='Enter Survey Name'
                    onChange={e => setSurveyName(e.target.value)}
                    />
                    <button className="get-survey-button"
                     onClick = {()=> {getSurveyContent(name)}}
                     >
                        Find Survey
                    </button>
                </div>
                <div className="response-output">
                   {surveyOutput}
                </div>
            </div>        
            <div className = "temp-pie">
                    <Pie
                    data = {data}
                    options = {options}>
                      
                    </Pie>

                  </div>

        </div>))}
        </>
    );
}
