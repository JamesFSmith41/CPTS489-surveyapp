import React from "react";
import axios from "axios";


export default async function PullSurvey(name)
{
    let surveyInfo =
    {
        surveyName: name
    }

   await axios
    .post("http://localhost:8000/getSurvey", surveyInfo)
        .then(response =>   {
            console.log(response.data)
            return response.data
        })
        .catch(err => console.error(err));
}
