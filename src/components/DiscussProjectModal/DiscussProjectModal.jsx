import React, { useState } from "react";
import "./DiscussProjectModal.scss";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DiscussProjectModal(props) {
  const { open, handleClose } = props;
  const [contactName, setContactName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [currentWebsiteUrl, setCurrentWebsiteUrl] = useState("");
  const [workType, setWorkType] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth={"md"}
      fullWidth
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="discuss-project-modal"
    >
      <p className="modal-title">{"Discuss With Us!"}</p>
      <div className="modal-body">
        <div className="inline-field">
          <input
            value={contactName}
            placeholder="Contact Name*"
            type="text"
            onChange={(e) => setContactName(e.target.value)}
          />
          <input
            value={businessName}
            placeholder="Business Name*"
            type="text"
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div className="inline-field">
          <input
            value={phoneNo}
            placeholder="Phone No*"
            type="tel"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            value={email}
            placeholder="Email*"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <input
            value={currentWebsiteUrl}
            placeholder="Current Website URL (if any)"
            type="text"
            onChange={(e) => setCurrentWebsiteUrl(e.target.value)}
          />
        </div>
        <select
          className="work-type"
          value={workType}
          onChange={(e) => setWorkType(e.target.value)}
        >
          <option>-- Select Work Type --</option>
          <option>Web Application Development</option>
          <option>Technical Support</option>
          <option>Training</option>
          <option>Upgradation</option>
          <option>Other</option>
        </select>
        <div className="modal-field">
          <textarea
            rows={6}
            value={projectDesc}
            placeholder="Brief Project Overview"
            onChange={(e) => setProjectDesc(e.target.value)}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button className="modal-btn cancel-btn" onClick={handleClose}>
          Cancel
        </button>
        <button className="modal-btn submit-btn" onClick={handleClose}>
          Submit
        </button>
      </div>
    </Dialog>
  );
}

export default DiscussProjectModal;
