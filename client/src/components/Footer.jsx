// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/footer.css';



const Footer = () => {
  return (
    <footer>
      <h2>Harmony Care</h2>
      <ul className='footer-list'>
        <li >
          <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} /> Facebook</a>
        </li>
        <li >
          <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </li>
        <li >
          <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} /> Instagram</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
