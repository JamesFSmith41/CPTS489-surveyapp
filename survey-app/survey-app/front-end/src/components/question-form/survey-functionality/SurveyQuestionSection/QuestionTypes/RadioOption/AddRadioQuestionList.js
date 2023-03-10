import { useState } from "react";
import RadioQuestion from "./RadioQuestion";
import { MdRemove } from "react-icons/md";
import AddRadioQuestion from "./AddRadioQuestion"

const AddRadioQuestionList = ({options,handleAddOption, handleDeleteOption}) => {

    return (
        <div className = "container">

            <div className = "radio-question-list">
                
                {options.map((option) =>
                <div>
                <RadioQuestion
                id = {option.id}
                option_text = {option.option_text}
                />

                <button className="delete-option"
                onClick = {()=>handleDeleteOption(option.id)}
                ><MdRemove/></button>

                </div>
                )}
            </div>
            <div className = "add-option">
            <AddRadioQuestion handleAddOption = {handleAddOption}/>
        </div>
        </div>
    );
}

export default AddRadioQuestionList;