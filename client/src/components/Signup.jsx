import React, { useState } from 'react';
import axios from 'axios';
import '../style/signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/signup', { username, email, password, role });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='signup-page'>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} className="signup-form">
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Role" required />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default Signup;
