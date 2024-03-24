import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import "./index.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <HiMiniUserCircle size={36} />
      <p className="nav-mob-el">Home</p>
      <FaInstagram size={36} className="nav-mob-el insta-icon" />
      <div className="course-group nav-mob-el">
        <div className="btn-group">
          <button className="course-btn">IELTS</button>
          <button className="course-btn">PTE</button>
          <button className="course-btn">TOEFL</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
