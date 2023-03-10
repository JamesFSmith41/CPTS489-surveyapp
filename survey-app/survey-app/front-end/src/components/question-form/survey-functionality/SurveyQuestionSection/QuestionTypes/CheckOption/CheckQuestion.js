import { MdOutlineAdd } from "react-icons/md";
export default function CheckQuestion({option_text}){
    return(
        <div className = "option-field">
        <div className = "check">
        <input type="checkbox" className="check-button"/>
        {option_text}
        </div>
        </div>
    );

}