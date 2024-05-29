import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationMap from "../LocationMap/LocationMap";

function Footer(props:any) {
  const { setOpenModal } = props;
  return (
    <div className="footer-container">
      <div className="footer-contact-section">
        <div className="footer-contact-info">
          <address className="contact-info">
            <RoomIcon className="contact-info-icon" />
            <a
              href="https://www.google.com/maps/place/Praise+Array/@18.4799375,73.8574173,18.16z/data=!4m6!3m5!1s0x3bc2eaa6f0f31bfd:0xf8106b91d8a0b29b!8m2!3d18.480099!4d73.8571271!16s%2Fg%2F11svb8pkzy?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              SNO 686/2A/2B SATARA ROAD FLAT NO 3 BIBAVEWADI Pune City ,
              Maharashtra.
            </a>
          </address>
          <div className="contact-info">
            <WhatsAppIcon className="contact-icon" />
            <a href="https://wa.me/919657135605" target="_blank" rel="noopener noreferrer">
              +91 9657135605
            </a>
            <div className="contacts">
            </div>
          </div>
          <div className="contact-info">
            <EmailIcon className="contact-info-icon" />
            <a
              href="mailto:admin@praisearray.com"
              target="_blank"
              rel="noreferrer"
            >
              admin@praisearray.com
            </a>
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
