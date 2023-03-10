import { useState } from "react";

export default function MappedDropdown({options}){

    const [type, setType] = useState('radio')

    const handleDropChange = (e) => {
        setType(e.target.value)
    }
    return(
        <div className = "option-field">
        <div className = "drop">
                        <select value = {type} onChange = {handleDropChange} selected="selected">

                        {options.map((option)=>
                            <option>{option.option_text}</option>
                        )}
                        </select>

        </div>
        </div>
    );

}