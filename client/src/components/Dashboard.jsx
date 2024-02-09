import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </div>
  );
};

export default Dashboard;
