import NewField from "./TakerQuestionFields";
import AddQuestionField from "../question-form/survey-functionality/SurveyQuestionSection/AddQuestionField";

const TakerQuestionList = ({questions, handleAddQuestion, handleDeleteQuestion, testvar}) =>
{
    //LoadSurvey();
    //let questions = await LoadSurvey();
    console.log(questions);
    console.log("testvar value: " + testvar);
    return(
        <>
            <div className = "question-field-list">
                {
                questions.map((question)=>
                    <NewField
                        id = {question.id}
                        question_title={question.question_title}
                        handleDeleteQuestion = {handleDeleteQuestion}
                        question_type = {question.question_type}
                        option_list = {question.option_list}
                        image = {question.image}
                        video = {question.video}
                        required = {question.required}
                    /> 
                )}
            </div>
        </>
    );
}

export default TakerQuestionList

 {/* 
        <div className = "add-question">
            <AddQuestionField handleAddQuestion = {handleAddQuestion}/>
        </div>
        */}