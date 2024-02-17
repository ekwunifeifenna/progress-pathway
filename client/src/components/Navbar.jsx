import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      
      <ul>
        <li>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </li>
        
        <li>
          <Link to="/billing">Billing</Link>
        </li>
        <li>
          <Link to="/business-insights">Business Insights</Link>
        </li>
        <li>
          <Link to="/emr">EMR</Link>
        </li>
        <li>
          <Link to="/payroll">Payroll</Link>
        </li>
        <li>
          <Link to="/practice-management">Practice Management</Link>
        </li>
        <li>
          <Link to="/scheduling">Scheduling</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
          
        </li>
        <li className='signup' id='signup'>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
