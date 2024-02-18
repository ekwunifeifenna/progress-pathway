import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Harmonylogo.png';
import '../style/sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-header">
        <img src={logo} alt="Logo" />
        <h1>Harmony Care</h1>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/emr">EMR</Link></li>
        <li><Link to="/business-insights">Business Insights</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
        <li><Link to="/practice-management">Practice Management</Link></li>
        <li><Link to="/scheduling">Scheduling</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/therapist">Therapists</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;