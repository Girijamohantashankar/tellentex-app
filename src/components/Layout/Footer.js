import React from "react";
import "../../styles/Footer.css";
import Logo from "../../images/tx-logo-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={Logo} alt="" />
      </div>
      <div className="footer_home">
        <ul>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Home</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Schedule</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>How to Register </span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Test Center</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Enquiry</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>FAQ</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>TALLENTEX Overseas</span>
          </li>
        </ul>
      </div>
      <div className="footer_home">
        <ul>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Photo Gallery</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Video Gallery</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Media Coverage </span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Associate With Us</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Contact</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Privacy Policy</span>
          </li>
          <li>
            <i class="fa-solid fa-angles-right"></i>
            <span>Terms and Condition</span>
          </li>
        </ul>
      </div>
      <div className="footer_home">
        <ul>
          <li>
          <i class="fa-solid fa-location-dot"></i>
            <span>"Sankalp" CP-6, Indra Vihar, Kota-324005, Rajasthan, India</span>
          </li>
          <li>
          <i class="fa-solid fa-phone"></i>
            <span>+ 91-744-3510202</span>
          </li>
          <li>
          <i class="fa-solid fa-phone"></i>
            <span>+ 91-744-2750202</span>
          </li>
          <li>
          <i class="fa-solid fa-envelope"></i>
            <span>contact@tallentex.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
