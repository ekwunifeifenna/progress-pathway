import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>Progress Pathway</h1>
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

export default LandingPage;
