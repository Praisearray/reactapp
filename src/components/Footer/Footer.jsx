import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationMap from "../LocationMap/LocationMap";

function Footer(props) {
  const { setOpenModal } = props;
  return (
    <div className="footer-container">
      <div className="footer-contact-section">
        <div className="footer-contact-info">
          <address className="contact-info">
            <RoomIcon className="contact-info-icon" />
            <p>
              SNO 686/2A/2B SATARA ROAD FLAT NO 3 BIBAVEWADI Pune City ,
              Maharashtra.
            </p>
          </address>
          <div className="contact-info">
            <CallIcon className="contact-info-icon" />
            <p>+91 9657135605</p>
          </div>
          <div className="contact-info">
            <EmailIcon className="contact-info-icon" />
            <p>admin@praisearray.com</p>
          </div>
          <div className="footer-btn-container">
            <button
              className="discuss-project-btn"
              onClick={() => setOpenModal(true)}
            >
              Discuss Your Project
            </button>
          </div>
        </div>
        <div className="map-container">
          <LocationMap />
        </div>
      </div>
      <div className="footer-last-section">
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
    </div>
  );
}

export default Footer;
