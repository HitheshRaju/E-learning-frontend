import React from 'react';
import './footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
   <footer>
    <div className="footer-content">
      <p>
        &copy; 2024 your E-Learning Platform. All rights reserved. <br />
        Made with ❤️ <a href="">Hithesh Raju</a>
      </p>
      <div className="social-links">
        <a href=""><FaFacebookSquare /></a>
        <a href=""><FaSquareXTwitter /></a>
        <a href=""><FaSquareInstagram />

        </a>
      </div>
    </div>
   </footer>
  );
};

export default Footer;