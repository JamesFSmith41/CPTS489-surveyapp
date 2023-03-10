import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { hashSHA256 } from "../Crypto/Hashing";
import './Login.css'
const Login = () =>
{
    let navigate = useNavigate();
    const [isSignUp, setIsSignUp] =useState(false);
    const [input, setInput] = useState({
        name :"", 
        email:"",
        password:""
    });

    const handleChange = (e)=> {
        setInput((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }
    const resetState = (e) =>{
        setIsSignUp(!isSignUp)
        setInput({name:"",email:"",password:""})
    }

    async function loginCheck()
    {
        let hash = await hashSHA256(input.password);
        const user = {
            operation: 'LOGIN',
            email: input.email,
            password: hash,
        }
        console.log(user);
        navigate("/homepage");
    }

    async function createUser()
    { 
        let hash = await hashSHA256(input.password);
        const user = {
            operation: 'CREATE',
            username: input.name,
            password: hash,
            email: input.email,

        }
        console.log(hash);
        navigate("/homepage");
    }

    return (
        <div>
            <form className="login-form"
                onSubmit = {handleSubmit}>
                <div className="login-wrapper">
                    <text className="login-header-text">
                        {isSignUp ? "SIGN UP" : "LOGIN" }
                        </text>

                    { isSignUp && 
                    <input className="input-field"
                        onChange = {handleChange}
                        name = "name" 
                        value = {input.name}
                        placeholder = "Name"/>
                    }
                    <input className="input-field"
                        onChange = {handleChange}
                        name = "email" 
                        type="email"
                        value = {input.email}
                        placeholder = "Email"/>
                    <input className="input-field"
                        onChange = {handleChange}
                        name = "password"
                        value = {input.password}
                        type ="password" 
                        placeholder = "Password"/>
                        
                    <button className="login-buttons"
                        onClick = {()=> isSignUp ? createUser() : loginCheck()}
                    //endIcon = {isSignUp ? <HowToRegRoundedIcon /> : <LoginRoundedIcon />}
                    >
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>

                    <button className="login-buttons"
                        //endIcon = {isSignUp ? <LoginRoundedIcon /> : <HowToRegRoundedIcon />}
                        onClick = {resetState}>
                            Change To {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login