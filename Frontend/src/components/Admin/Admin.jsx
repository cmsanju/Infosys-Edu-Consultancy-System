import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const newErrors = {};

        // Validate email
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!email.endsWith("@edusity.com")) {
            newErrors.email = "Email must end with @edusity.com.";
        }

        // Validate password
        if (!password.trim()) {
            newErrors.password = "Password is required.";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Password must contain at least one uppercase letter.";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = "Password must contain at least one special character.";
        }

        setErrors(newErrors);

        // Proceed if no errors
        if (Object.keys(newErrors).length === 0) {
            // Save admin's email (or name) in localStorage to display in navbar
            localStorage.setItem("adminName", email.split("@")[0]);  // You can change this to a real name if available

            navigate("/admindashboard");
        }
    };

    return (
        <div>
            <div className="admin-login-container">
                <form className="admin-login-form" onSubmit={handleLogin}>
                    <h2>Admin Login</h2>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
