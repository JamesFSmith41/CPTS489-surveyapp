import { MdRemove } from "react-icons/md";
import CheckQuestion from "./CheckQuestion";
import AddCheckQuestion from "./AddCheckQuestion"

const AddCheckQuestionList = ({options,handleAddOption,handleDeleteOption}) =>{
   
    return (
        <div className = "container">
            <div className = "check-question-list">
                {options.map((option) =>
                <div>
                <CheckQuestion
                option_text = {option.option_text}
                />

                <button className="delete-option"
                onClick = {()=>handleDeleteOption(option.id)}
                ><MdRemove/></button>
                
                </div>
                )}
            </div>
            <div className = "add-option">
            <AddCheckQuestion handleAddOption = {handleAddOption}/>
        </div>
        </div>
    );

}

export default AddCheckQuestionList;