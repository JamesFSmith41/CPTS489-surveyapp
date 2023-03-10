import { useState } from "react";
import { MdRemove } from "react-icons/md";
import AddDropdownQuestion from "./AddDropdownQuestion"
import DropdownQuestion from "./DropdownQuestion";

const AddDropdownQuestionList = ({options,handleAddOption, handleDeleteOption}) => {

    return (
        <div className = "container">
            <div className = "radio-question-list">
                
                {options.map((option) =>
                <div>
                <DropdownQuestion
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
            <AddDropdownQuestion handleAddOption = {handleAddOption}/>
        </div>
        </div>
    );
}

export default AddDropdownQuestionList;