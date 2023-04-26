import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { hashSHA256 } from "../Crypto/Hashing";
import './Login.css'

const Login = () => {
    let navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }
    const resetState = (e) => {
        setIsSignUp(!isSignUp)
        setInput({ name: "", email: "", password: "" })
    }

    async function loginCheck() {
        let hash = await hashSHA256(input.password);
        const user = {
            operation: 'LOGIN',
            email: input.email,
            password: hash,
        }
        console.log(user);
        const result = await axios
            .post("http://localhost:8000/login", user)
            .catch(err => console.error(err));
        if (result.request.responseText === "true") {
            navigate("/homepage");
        }
        else {
            console.log("Invalid Login");
            console.log(result.request.responseText);
        }
    }

    async function createUser() {
        let hash = await hashSHA256(input.password);
        const user = {
            operation: 'CREATE',
            username: input.name,
            password: hash,
            email: input.email,

        }
        console.log(hash);
        await axios
            .post("http://localhost:8000/createUser", user)
            .then(navigate("/homepage"))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form className="login-form"
                onSubmit={handleSubmit}>
                <div className="login-wrapper">
                    <text className="login-header-text">
                        {isSignUp ? "SIGN UP" : "LOGIN"}
                    </text>

                    {isSignUp &&
                        <input className="input-field"
                            onChange={handleChange}
                            name="name"
                            value={input.name}
                            placeholder="Name"
                            required />
                    }

                    <input className="input-field"
                        onChange={handleChange}
                        name="email"
                        type="email"
                        value={input.email}
                        placeholder="Email"
                        required />

                    <input className="input-field"
                        onChange={handleChange}
                        name="password"
                        value={input.password}
                        type="password"
                        placeholder="Password"
                        required />

                    <button className="login-buttons"
                        onClick={() => isSignUp ? createUser() : loginCheck()}>
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>

                    <button className="login-buttons"
                        onClick={resetState}>
                        Change To {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login