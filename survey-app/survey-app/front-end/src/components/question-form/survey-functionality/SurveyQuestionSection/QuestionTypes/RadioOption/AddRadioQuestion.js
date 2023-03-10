import { MdOutlineAdd } from "react-icons/md";
import { useState } from "react";

export default function AddRadioQuestion({handleAddOption}){

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleAddClick = (e) => {
        if (text.trim().length > 0 )
        {
            handleAddOption(text)
            setText('')
        }
    }

    return(
        <div className = "option-field">
        <div className = "radio">
        <input type="radio" className="radio-button"/>

        <input className="response-text"
            placeholder = "New Option"
            value = {text}
            onChange = {handleTextChange}
        />
        </div>
        
        <div className = "add-question">
        <button className="add-option"
                onClick = {handleAddClick}
        >
            <MdOutlineAdd/>
            </button>

        
        </div>

        </div>
    );

}