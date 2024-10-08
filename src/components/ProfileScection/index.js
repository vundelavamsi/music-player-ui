import React from "react";
import "./index.css";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.png";

const ProfileSection = () => {
  return (
    <div className="profile-container">
      <img src={logo} alt="logo" className="logo" />
      <img src={profile} alt="profile" className="profile-icon" />
    </div>
  );
};

export default ProfileSection;
