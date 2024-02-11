import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        {/* Add your specific content here */}
        <h1>Welcome to the Therapy Software Dashboard</h1>
        <p>Here you can manage your therapy sessions and track progress.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
