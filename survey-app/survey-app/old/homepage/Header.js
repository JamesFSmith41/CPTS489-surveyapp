import React from 'react'
import "./Header.css"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {IconButton,TextField} from "@mui/material";
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

function testDate()
{
    console.log("test");
}

function Header()
{
    return (
        <div className="header">
            
            <div className="header_info">
                <IconButton>
                    <MenuRoundedIcon/>
                </IconButton>

                <DescriptionRoundedIcon fontSize = "large" className ="form_image"/>
                <div className="info" sx={{ fontFamily: 'Monospace' }}>
                    WTF
                </div>

            </div>
            <div className="header_search">
                {/*<input type ="text" name = "search" />*/}
                <TextField
                display ="flex" 
                alignItems = "center"
                flexDirection={"row"}
                size = "small"
                sx= {{width:700,height:40,borderRadius:5}}
                margin = "normal"  variant="outlined" placeholder = "Search"/>
                
                <IconButton
                onClick={() => testDatabase()}>
                    <SearchRoundedIcon fontSize = "large"/>

                </IconButton>
            </div>
            <div className="header_left">
                <IconButton>
                    <AppsRoundedIcon/>
                </IconButton>

                <IconButton>
                    <AccountCircleRoundedIcon fontSize = "large"/>
                </IconButton>
            </div>

        </div>
    )
}

export default Header;