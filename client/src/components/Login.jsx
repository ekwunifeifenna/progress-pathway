import React, { useState } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom'; // Import useLocation
import {useNavigate} from 'react-router-dom'; // Import useHistory
import '../style/login.css';

const Login = () => {
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Add this line
    // const [role, setRole] = useState(''); // Add this line
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Create a history object
    // const location = useLocation(); // Create a location object

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await axios.post('http://localhost:3001/api/users/login', {
        //         email,
        //         password,
        //     });

        //     console.log(response.data); // Handle the response as needed

        //     if (response.data.success) {
        //         navigate('/Dashboard'); // Navigate to the Dashboard page if login is successful
        //     } else {
        //         // Handle unsuccessful login
        //         setError('Invalid email or password. Please create an account.');
        //     }
        // } catch (error) {
        //     console.error(error); // Handle the error as needed
        //     setError('An error occurred. Please try again.');
        // }

         axios.post('http://localhost:3001/api/users/login', { email, password })
         .then(response => {
            console.log(response);
            if(response.data === 'success'){
                navigate('/dashboard');

            }
                
            })
        .catch(error => console.log(error));

    };

    return (
        <div className='login-page'>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">


                <label>
                    Email: 
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
