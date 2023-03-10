import axios from 'axios';

export function printEach(message)
{
    console.log(message.question_field);
}

export async function questionFieldDatabase(survey)
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
