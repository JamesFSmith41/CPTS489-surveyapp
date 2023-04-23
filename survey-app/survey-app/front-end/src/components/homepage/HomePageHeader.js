import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './HomePageHeader.css'

function Header()
{
    let navigate = useNavigate();

    return (
        <div className="header">
            <div className="header_info">
                <img src={require('../../images/menu-icon.png')} className="menu-icon"
                onClick={() => {navigate("/")}}
                />
                <img src={require('../../images/document-icon.png')} className="document-icon"/>
                <text className="info">
                    SURVEY APP
                </text>
            </div>
            <div className="header_search">
                {/*<input type ="text" name = "search" />*/}
                <input className="search-bar" type='search' placeholder = "Search"/>
                <div className="search-wrapper">
                    <img src={require('../../images/search-icon.png')} className="search-icon"/>
                    <text className="search-text">
                        Search
                    </text>
                </div>
            </div>
            <div className="header-right-section">
                <text>
                    Notifactions
                </text>
                <img src={require('../../images/profile-icon.png')} className="profile-icon"/>
                <button className="logout-button"
                    onClick={() => {navigate("/")}}
                    >
                        Logout
                </button>
            </div>
        </div>
    )
}

export default Header;