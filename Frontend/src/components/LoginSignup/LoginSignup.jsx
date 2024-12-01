import React, { useState, useContext } from 'react';
import './LoginSignup.css';
import cross_icon from '/src/assets/cross_icon.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext.jsx";

const LoginSignUp = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [username, setUsernameLocal] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); // Track errors
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const validateForm = () => {
        const newErrors = {};
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
        if (currState === "Sign Up" && !username.trim()) {
            newErrors.username = "Username is required";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(password)) {
            newErrors.password = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    

    const save = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post("http://localhost:8085/api/v1/user/save", {
                username,
                email,
                password,
            });
            setUser({ username, email, password });
            alert("User Registration Successful");
            setShowLogin(false);
        } catch (err) {
            alert("Error occurred: " + err.message);
        }
    };

    const login = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        try {
            const res = await axios.post("http://localhost:8085/api/v1/user/login", {
                email,
                password,
            });

            if (res.data.message === "Email not exists") {
                alert("Email does not exist");
            } else if (res.data.message === "Login Success") {
                const userData = {
                    username: res.data.username,
                    email,
                    userId: res.data.userId,
                };
                localStorage.setItem("user", JSON.stringify(userData));
                setUser(userData);
                setShowLogin(false);
            }
        } catch (err) {
            alert("Error occurred: " + err.message);
        }
    };

    return (
        <div className='login-popup'>
            <form
                className='login-popup-container'
                onSubmit={currState === "Sign Up" ? save : login}
            >
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={cross_icon} alt='' />
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Sign Up" && (
                        <>
                            <input
                                type='text'
                                placeholder='Name'
                                value={username}
                                onChange={(event) => setUsernameLocal(event.target.value)}
                            />
                            {errors.username && (
                                <p className="error-message">{errors.username}</p>
                            )}
                        </>
                    )}
                    <input
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("Sign Up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>Login Here</span>
                    </p>
                )}
                <p>
                    Login as Admin?{" "}
                    <span className='adminlogin'>
                        <Link
                            to="/admin"
                            onClick={() => setShowLogin(false)}
                        >
                            Click Here
                        </Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginSignUp;
