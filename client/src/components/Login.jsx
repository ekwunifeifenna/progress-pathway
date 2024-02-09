import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        const response = await axios.post('/api/login', {
            username,
            password,
        });
    
        console.log(response.data); // Handle the response as needed
        } catch (error) {
        console.error(error); // Handle the error as needed
        }
    };
    
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
}

export default Login;
