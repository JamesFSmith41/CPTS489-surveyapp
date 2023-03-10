import NewField from "./SurveyQuestionFields";
import AddQuestionField from "./AddQuestionField";

const QuestionFieldList = ({questions, handleAddQuestion,handleDeleteQuestion}) => {
    return(
        <div className = "container">
            
        <div className = "question-field-list">
            {questions.map((question)=>
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

        <div className = "add-question">
            <AddQuestionField handleAddQuestion = {handleAddQuestion}/>
        </div>

        </div>
    );
}

export default QuestionFieldList