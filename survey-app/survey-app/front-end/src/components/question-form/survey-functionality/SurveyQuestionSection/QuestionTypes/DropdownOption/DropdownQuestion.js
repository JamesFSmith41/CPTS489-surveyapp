import { useState } from "react";

export default function DropdownQuestion({option_text}){
    return(
        <div className = "option-field">
        <div className = "drop">
        {option_text}

        </div>
        </div>
    );

}