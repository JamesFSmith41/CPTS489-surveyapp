import NewField from "./SurveyQuestionFields"
import "./SurveyQuestionFields.css";
import { useState,useEffect,useRef } from "react";
import { MdInsertPhoto,MdVideoLibrary } from "react-icons/md";
import CheckQuestion from "./QuestionTypes/CheckOption/CheckQuestion";
import TextQuestion from "./QuestionTypes/TextOption/TextQuestion";
import AddRadioQuestionList from "./QuestionTypes/RadioOption/AddRadioQuestionList";
import AddCheckQuestionList from "./QuestionTypes/CheckOption/AddCheckQuestionList";
import axios from "axios";
import { nanoid } from "nanoid";
import AddDropdownQuestionList from "./QuestionTypes/DropdownOption/AddDropdownQuestionList";

const AddQuestionField = ({handleAddQuestion}) => {
    const [showRadio, setShowRadio] = useState(false);
    const [showCheck, setShowCheck] = useState(false);

    const [options, setOptions] = useState([{}]);

    const [title, setTitle] = useState('')
    const [type, setType] = useState('radio')
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [image,setImage] = useState([])
    const [video,setVideo] = useState([])
    const [required,setRequired] = useState(false)
    

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleAddClick = (e) => {
        if (title.trim().length > 0 )
        {
            handleAddQuestion(title,type,list,image, video, required)
            setTitle('')
            setType('radio')
            setText('')
            setList([])
            setOptions([{}])
            setImage('')
            setVideo([])
        }
    }

    const addOption = (text) => {
        const newOption = {
            id:nanoid(),
          option_text:text
        }
  
        const newOptions = [...options, newOption];
        setOptions(newOptions)
        setList([...list,{option_text:text, id:nanoid()}])
      }

      const deleteOption = (id) => {
        const newOptions = [...options];

        const index = options.findIndex((option) => option.id === id);
    
        newOptions.splice(index, 1);
    
        setOptions(newOptions);
        setList(newOptions);
      }

    const handleDropChange = (e) => {
        setType(e.target.value)
    }

    const handleRequired = (e) => {
        setRequired(!required)
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        fileToCloud(file)
        console.log(file)
    }

    const fileToCloud = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const handleVideo = (e) => {
        const vfile = e.target.files[0]
        vfileToCloud(vfile)
        console.log(vfile)
    }

    const vfileToCloud = (vfile) => {
        const vreader = new FileReader()
        vreader.readAsDataURL(vfile)
        vreader.onloadend = () => {
            setVideo(vreader.result);
        }
    }

    const videoRef = useRef();

    useEffect(() => {    
      videoRef.current?.load();
    }, [video]);

    return(
        <div className = "field">
                <div className="question-field-box">
                    <div className = "question-type-row">
                    
                    <label for="image-upload" class="custom-image-upload">
                    <i class="fa fa-cloud-upload"></i> <MdInsertPhoto/>
                    </label>

                    <input 
                    id="image-upload" 
                    type="file"
                    onChange = {handleImage}
                    />

                    <label for="video-upload" class="custom-video-upload">
                    <i class="fa fa-cloud-upload"></i> <MdVideoLibrary/>
                    </label>

                    <input 
                    id="video-upload" 
                    type="file"
                    onChange = {handleVideo}
                    />

                    {image.length>0 ? <img className="img-fluid" src={image} alt="" /> : null}
                    
                    {video.length>0 ? 
                    <video ref = {videoRef} width="320" height="240" controls>
                        <source src={video} type="video/mp4"/>
                    </video> : null}

                    <button 
                    className = "require-button"
                    onClick = {handleRequired}
                    >
                        Required = {required.toString()}
                        </button>
                    
                        <div className = "question-title">
                        <input
                            value = {title}
                            placeholder = "New Question"
                            onChange = {handleChange}
                        />

                        <div className = "dropdown">
                        <select value = {type} onChange = {handleDropChange} selected="selected">
                            <option>radio</option>
                            <option>checkbox</option>
                            <option>textbox</option>
                            <option>dropdown</option>
                        </select>

                        {type === "radio" && 
                        <AddRadioQuestionList
                        options = {options}
                        handleAddOption ={addOption}
                        handleDeleteOption = {deleteOption}
                        />}


                        {type === "checkbox" && 
                        <AddCheckQuestionList
                        options = {options}
                        handleAddOption ={addOption}
                        handleDeleteOption = {deleteOption}
                        />}
                        
                        {type === "textbox" && <TextQuestion/>}

                        {type === "dropdown" && 
                        <AddDropdownQuestionList
                        options = {options}
                        handleAddOption ={addOption}
                        handleDeleteOption = {deleteOption}
                        />}
                        </div>
                        </div>

                    </div>
                </div>        
                <div className = "survey-question-button-row">
                    <div className = "add_question"> 
                        <button className="survey-button"
                        onClick = {handleAddClick}>
                                        Add Question
                                </button>

                                <button className="survey-button"
                                    type = "submit"
                                    variant = "contained">
                                    Submit Survey
                                </button> 
                    </div>
                </div>
            </div>
    );
}

export default AddQuestionField