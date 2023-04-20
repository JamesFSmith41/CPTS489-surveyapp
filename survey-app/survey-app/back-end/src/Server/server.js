import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import * as database from '../Database.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.post('/createSurvey', (req, res) => {
    let survey = req.body;  
    console.log("Survy Name: " + survey.surveyName)
    console.log(survey);

    database.executeDatabasepOperationsSurvey("CREATE", survey);
});

app.post('/getSurvey', async (req, res) => {
    let surveyName = req.body.surveyName;
    console.log("survey name: " + surveyName);
    //console.log(req.body);
    await database.executeDatabasepOperationsSurvey("GET", surveyName)
        .then(response =>   {
            //console.log("Server Result")
            //console.log(response.questions)
            res.send(response)
        }).catch(err => {
            console.log(err)
            res.send({ err }) // <= send error
          })
});

app.post('/createUser', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email;

    console.log("username: " + username);
    console.log("email: " + email);
    database.executeDatabasepOperationsUser("CREATE", username, password, email);
})

app.post('/login', async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    console.log(email);
    console.log(password);
    const result = await database.executeDatabasepOperationsUser("LOGIN", null, password, email);

    console.log(result);
    console.log("test");
    res.send(result);
});

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
}); 

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const port = 8000;

app.listen(port, () => {
    console.log("port: " + port);
  });
