// import React from "react";
// import Logo from "../img/logo.png";

// const Footer = () => {
//   return (
//     <footer>
//       <img src={Logo} alt="" />
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li><a href="/?cat=art">Art</a></li><br/>
            <li><a href="/?cat=science">Science</a></li><br/>
            <li><a href="/?cat=technology">Technology</a></li><br/>
            <li><a href="/?cat=cinema">Cinema</a></li><br/>
            <li><a href="/?cat=design">Design</a></li><br/>
            <li><a href="/?cat=food">Food</a></li><br/>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>123 Main Street</p>
          <p>xyz, asdfghjkl 12345</p>
          <p>info@example.com</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li><br/>
            <li><a href="#">Twitter</a></li><br/>
            <li><a href="#">Instagram</a></li><br/>
            <li><a href="#">LinkedIn</a></li><br/>
          </ul>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;

