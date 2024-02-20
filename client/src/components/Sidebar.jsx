import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Harmonylogo.png';
import '../style/sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-header">
        {/**Make the image and the title in the sidebar link to the dashboard page */}
        <Link to ='/dashboard'><img src={logo} alt="Logo" /></Link>
        <Link to='/dashboard'><h1>Harmony Care</h1></Link>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/emr">EMR</Link></li>
        <li><Link to="/business-insights">Business Insights</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
        <li><Link to="/practice-management">Practice Management</Link></li>
        <li><Link to="/scheduling">Scheduling</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/therapists">Therapists</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;