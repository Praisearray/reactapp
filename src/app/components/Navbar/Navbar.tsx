'use client'

import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "./Navbar.scss";

function Navbar(props:any) {
  const { setOpenModal } = props;
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <h2>
          Praise <span>{"[ ]"}</span> Array
        </h2>
      </div>
      <div
        className={`hamburger-menu ${openMenu ? "open" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`contact-links ${openMenu ? "show-menu" : ""}`}>
        <div className="contact">
          <EmailIcon sx={{ fontSize: "30px" }} className="contact-icon" />
          <div className="contact-link">
            <p>admin@praisearray.com</p>
          </div>
        </div>
        <div className="contact">
          <CallIcon sx={{ fontSize: "30px" }} className="contact-icon animate-icon" />
          <div className="contact-link">
            <p>+91 9657135605</p>
          </div>
        </div>
        <button
          className="discuss-project-btn"
          onClick={() => setOpenModal(true)}
        >
          Discuss Your Project
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
