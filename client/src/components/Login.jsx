import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../style/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation(); // Create a location object

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', {
                username,
                password,
            });

            console.log(response.data); // Handle the response as needed

            if (response.data.success) {
                history.push('/Dashboard'); // Navigate to the Dashboard page if login is successful
            } else {
                // Handle unsuccessful login
            }
        } catch (error) {
            console.error(error); // Handle the error as needed
        }
    };

    return (
        <div className='login-page'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
