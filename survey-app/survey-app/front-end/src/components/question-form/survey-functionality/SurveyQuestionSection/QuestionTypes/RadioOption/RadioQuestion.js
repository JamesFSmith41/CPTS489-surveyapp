export default function RadioQuestion({option_text}){
    return(
        <div className = "option-field">
        <div className = "radio">
        <input type="radio" name = "radio" className="radio-button"/>
        {option_text}

        </div>
        </div>
    );

}