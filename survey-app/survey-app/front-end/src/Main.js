import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './components/login-page/Login.js'
import HomePage from './components/homepage/HomePage.js'
import SurveyQuestionMain from './components/question-form/main-question-page/SurveyMain'
import MainRessponse from './components/question-form/survey-functionality/SurveyResponseSection/MainResponse'

function Main(){
    return(
        <Router>
            <Routes>
                <Route exact path ="/" element={<Login/>}/>
                <Route exact path ="/homepage" element={<HomePage/>}/>
                <Route exact path ="/creator/question" element={<SurveyQuestionMain/>}/>
                <Route exact path ="/creator/response" element={<MainRessponse/>}/>
            </Routes>
        </Router>
    );
}

export default Main;