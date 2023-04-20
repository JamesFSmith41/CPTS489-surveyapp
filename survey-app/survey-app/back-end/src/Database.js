import { config } from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

async function connecToCluster(uri)
{
    try{
        const client = new MongoClient(uri);
        console.log('Connecting to cluster');
        await client.connect();
        console.log("Connected to Cluster");
        return client;
    } catch(error)
    {
        console.error('Connection to Cluster Failed', error);
        process.exit();
    }
}

export async function executeDatabasepOperationsSurvey(operation, survey)
{
    config();
    const uri = process.env.DB_URI;
    console.log(uri);
    let client;
    try {
        client = await connecToCluster(uri);
        const db = client.db('ProjectAegir');
        const collection = db.collection('survey');
        //await createSurvey(collection, text);
        //console.log(survey.surveyName);
        //return await collection.findOne({survey: {surveyName: survey}}).toArray();

        switch (operation)
        {
            case 'GET':
                let result = await getSurvey(collection, survey);
                return result;
            case 'CREATE':
                
                await createSurvey(collection, survey);
                break;

            case 'EXISTS':
              
                return surveyExists(collection, survey);

            case 'DELETE':
                await deleteSurvey(collection, survey);
                //const deleteStatus = await findUserByName(collection, name);

                if (deleteStatus == [])
                {
                    const status = "Survey Deleted";
                    console.log(status);
                    return status;
                }
                else
                {
                    const status = "Survey Not Deleted";
                    console.log(status);
                    return status;
                }

        }
    } finally {
        await client.close();
    }
}

async function createSurvey(collection, survey) 
{
    const date = new Date();

    let currentDay= String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth()+1).padStart(2,"0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 

    let currentDate = `${currentMonth}-${currentDay}-${currentYear}`;


    const document = {
        _id: ObjectId(),
        surveyName: survey.surveyName,
        username: survey.username,
        surveyQuestions: survey.questions,
        created: currentDate
    }

    console.log(document);
    await collection.insertOne(document);
}

async function surveyExists(collection, survey)
{
    const result = collection.findOne({surveyName : survey.surveyName});
    if (result.length != 0)
    {
        console.log("Survey Exists");
        return true;
    }
    else
    {
        console.log("Survey Does Not Exist");
        return false;
    }
}

async function getSurvey(collection, name)
{
    console.log("database survey name - " + name.name)
    const result = await collection.findOne({surveyName: name.name});
    //console.log("Survey Result");
    console.log(result);
    return result;
}

async function findSurvey(collection, surveyId)
{
    
}

async function deleteSurvey(collection)
{
    await collection.deleteMany({});
}


async function updateSurvey(collection, name, updatedFields)
{
    await collection.updateOne(
        { name },
        { $set: updatedFields}
    );
}


export async function executeDatabasepOperationsUser(operation, username, password, email)
{
    config();
    const uri = process.env.DB_URI;
    let client;
    try {
        client = await connecToCluster(uri);
        const db = client.db('ProjectAegir');
        const collection = db.collection('users');
        //await createUser(collection, username, password, email);
        console.log(operation);
        switch (operation)
        {
            case 'CREATE':
                
                await createUser(collection, username, password, email);
                break;

            case 'LOGIN':
                const result = await loginCheck(collection, email, password);
                console.log(result);
                return result;

            case 'SEARCH':
                const user = await findUserByName(collection, username);
                if (user != [])
                {
                    const status = true;
                    console.log("User Found");
                    return status;
                }
                else
                {
                    const status = false;
                    console.log("User Not Found");
                    return status;
                }

            case 'GETUSER':
                const userInfo = await findUserByName(collection, username);
                if (userInfo != [])
                {
                    console.log("User Found");
                    return userInfo;
                }
                else
                {
                    console.log("User Not Found");
                    return null;
                }
            case 'DELETE':
                await deleteUserByName(collection, username);
                const deleteStatus = await findUserByName(collection, username);

                if (deleteStatus == [])
                {
                    const status = "User Deleted";
                    console.log(status);
                    return status;
                }
                else
                {
                    const status = "User Not Deleted";
                    console.log(status);
                    return status;
                }

        }
    } finally {
        await client.close();
    }
}

async function createUser(collection, username, password, email)
{
    const user = {
        username: username,
        password: password,
        email: email,
    }
    await collection.insertOne(user);
}
async function findUserByEmail(collection, email)
{
    return collection.find({ 
        email
     }).toArray();
}

async function loginCheck(collection, email, password)
{   
    const result = await collection.find({ 
        email,
        password
     })

     if (result.length != 0)
        {
            console.log("User Found");
            return true;
        }
        else
        {
            console.log("User Not Found");
            return false;
        }


}
async function findUserByNameAndPassword(collection, name, password)
{
    return collection.find({ 
        name,
        password
     }).toArray();
}

async function deleteUser(collection, name, password)
{

}

// async function getNewMessages(collection, name, id)
// {
//     console.log(name);
//     return collection.find({
//         _id: { $gt: id },
//         recipientName: name
//     }).toArray();
// }
