import React from 'react';
import { Link } from 'react-router-dom';
import '../style/dashboard.css';
import logo from '../assets/Harmonylogo.png';
import Sidebar from './Sidebar';
const Dashboard = () => {
  return (
    <div>
      <nav>
        {/* Navigation bar content */}
      </nav>
      <div className="dashboard">
      <Sidebar /> 
 
        <main>
        <h1>Therapy Dashboard</h1>
          <div className="dashboard-content">
            <div className="dashboard-item">
              <h2>Upcoming Appointments</h2>
              {/* Appointment list or calendar */}
            </div>
            <div className="dashboard-item">
              <h2>Client Progress</h2>
              {/* Progress charts or reports */}
            </div>
            <div className="dashboard-item">
              <h2>Notes</h2>
              {/* Notes or reminders */}
            </div>
            <div className="dashboard-item">
              <h2>Tasks</h2>
              {/* Task list */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
