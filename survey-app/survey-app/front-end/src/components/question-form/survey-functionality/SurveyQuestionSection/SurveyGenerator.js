import axios from 'axios';

export default async function GenerateSurvey(questions, surveyName, userName)
{
    const survey = 
    {
        username: userName,
        surveyName: surveyName,
        questions: questions
    }

    console.log("Attempting to create survey")
    console.log(survey);
    await axios
    .post("http://localhost:8000/createSurvey", survey)
        .catch(err => console.error(err));
}
