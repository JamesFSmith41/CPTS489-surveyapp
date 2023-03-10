import { MdOutlineAdd } from "react-icons/md";
import CheckQuestion from "./CheckQuestion";

export default function CheckQuestionList({options,handleAddOption,handleDeleteOption}){
   
    return (
        <div className = "container">
            <div className = "check-question-list">
                {options.map((option) =>
                <CheckQuestion
                option_text = {option.option_text}
                />
                )}
            </div>
        </div>
    );

}