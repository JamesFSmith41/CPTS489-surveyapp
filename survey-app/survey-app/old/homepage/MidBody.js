import React from 'react'
import {IconButton, Button} from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SpeakerNotesRoundedIcon from '@mui/icons-material/SpeakerNotesRounded';
import "./MidBody.css"

function MidBody(){
    return(
        <div className = "midbody_section">
            <Button endIcon = {<AddCircleOutlineRoundedIcon/>}
                    type = "submit"
                    sx= {{marginTop : 3, borderRadius : 3, ":hover":{ 
                        boxShadow: '10px 10px 20px #bbdefb',
                    },}}
                    variant = "contained"
                    style={{backgroundColor: "#3f51b5"}}
                    boxShadow = {'5px 5px 10px #bbdefb'}>
                        START A NEW SURVEY
                    </Button>
            
            <Button endIcon = {<SpeakerNotesRoundedIcon/>}
                    type = "submit"
                    sx= {{marginLeft :3,marginTop : 3, borderRadius : 3, ":hover":{ 
                        boxShadow: '10px 10px 20px #bbdefb',
                    },}}
                    variant = "contained"
                    style={{backgroundColor: "#3f51b5"}}
                    boxShadow = {'5px 5px 10px #bbdefb'}>
                        ANSWER PENDING SURVEYS
                    </Button>
            <div className = "midbody_mid">

            </div>
        </div>
    )
}

export default MidBody