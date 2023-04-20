import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {Box,Typography, TextField,Button} from "@mui/material";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import axios from 'axios';
import { hashSHA256 } from "../front-end/src/components/Crypto/Hashing";

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

    async function createUser()
    {
        let hash = hashSHA256(input.password);
        const user = {
            username: input.name,
            password: hash,
            email: input.email,

        }
        console.log(user);
        await axios
        .post("http://localhost:8000/createUser", user)
          .catch(err => console.error(err));
        navigate("/homepage");
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <Box 
                display ="flex" 
                flexDirection={"column"} 
                maxWidth = {400}
                alignItems = "center"
                justifyContent={'center'}
                margin = "auto"
                marginTop = {5}
                padding = {3}
                borderRadius = {5}
                boxShadow = {'5px 5px 10px #bbdefb'}
                sx = {{
                    ":hover":{ 
                        boxShadow: '10px 10px 20px #bbdefb',
                    },
                }}
                >
                <Typography
                style={{
                    color: "#3f51b5",
                }}
                sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }} variant="h2" padding ={3} textAlign = "center">
                    {isSignUp ? "SIGN UP" : "LOGIN" }
                    </Typography>

                { isSignUp && 
                <TextField onChange = {handleChange}
                name = "name" value = {input.name}
                margin = "normal" type = {"text"} variant="outlined" placeholder = "Name"/>
                }

                <TextField onChange = {handleChange}
                name = "email" value = {input.email}
                margin = "normal" type = {"email"} variant="outlined" placeholder = "Email"/>
                
                <TextField onChange = {handleChange}
                name = "password" value = {input.password}
                margin = "normal" type = {"password"} variant="outlined" placeholder = "Password"/>
                
                <Button onClick = {()=> isSignUp ? createUser() : createUser()}
                endIcon = {isSignUp ? <HowToRegRoundedIcon /> : <LoginRoundedIcon />}
                type = "submit"
                sx= {{marginTop : 3, borderRadius : 3}}
                variant = "contained"
                style={{
                    backgroundColor: "#3f51b5",
                }}>
                    {isSignUp ? "Sign Up" : "test"}
                    </Button>

                <Button endIcon = {isSignUp ? <LoginRoundedIcon /> : <HowToRegRoundedIcon />}
                onClick = {resetState} sx= {{marginTop : 3, borderRadius : 3}}
                style={{
                    color: "#64b5f6",
                }}>
                    Change To {isSignUp ? "Login" : "Sign Up"}
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Login