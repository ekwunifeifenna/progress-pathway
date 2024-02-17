// import React from 'react';
import logo from '../assets/logo.png';
import '../style/landing-page.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>

      <div className='landing-page-text'>
      <h1>Progress Pathway</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore similique voluptatem, 
        vitae alias culpa consequatur quisquam, aut molestiae est quod non reiciendis accusantium 
        impedit distinctio voluptas aliquam facere magni at repellendus, quam aspernatur placeat suscipit illo.
         Sunt, deleniti. Ratione sit in esse facere maiores iure quidem est totam dicta dolore.</p>

         <button>Get Started</button>

      </div>
      
      <img src={logo} alt='progress pathway logo'/>
        
      
    </div>
  );
};

export default LandingPage;
