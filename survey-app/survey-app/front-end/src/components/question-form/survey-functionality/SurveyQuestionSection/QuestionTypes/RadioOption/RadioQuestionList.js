import { useState } from "react";
import RadioQuestion from "./RadioQuestion";
import { MdOutlineAdd } from "react-icons/md";
import AddRadioQuestion from "./AddRadioQuestion";

const RadioQuestionList = ({options,handleAddOption,handleDeleteOption}) => {

    return (
        <div className = "container">
            <div className = "radio-question-list">
                {options.map((option) =>
                <RadioQuestion
                id = {option.id}
                option_text = {option.option_text}
                />
                )}
            </div>
        </div>
    );
}

export default RadioQuestionList;