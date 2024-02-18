// import React from 'react';
import logo from '../assets/logo.png';
import '../style/landing-page.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page'>

      <div className='landing-page-text'>
      <h1>Harmony</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore similique voluptatem, 
        vitae alias culpa consequatur quisquam, aut molestiae est quod non reiciendis accusantium 
        impedit distinctio voluptas aliquam facere magni at repellendus, quam aspernatur placeat suscipit illo.
         Sunt, deleniti. Ratione sit in esse facere maiores iure quidem est totam dicta dolore.</p>

         <Link to="/signup" className="btn">Get Started</Link>

      </div>
      
      <img src={logo} alt='progress pathway logo'/>
        
      
    </div>
  );
};

export default LandingPage;
