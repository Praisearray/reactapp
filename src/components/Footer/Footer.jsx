import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon className="footer-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <TwitterIcon className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/praisearray/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="footer-icon" />
        </a>
      </div>
      <p>&#169; {new Date(Date.now()).getFullYear()} Praise Array</p>
    </div>
  );
}

export default Footer;
