import React from "react";
import Navbar from "../Navbar";

import f1 from "../../assets/frame1.png";
import yt from "../../assets/yt.png";

import "./index.css";
import GraphCard from "../GraphCard";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-body">
        <div>
          <h1 className="progress-heading">Your Progress Summary</h1>
          <div className="main-head">
            <div className="graph-container">
              <p className="graph-text">
                <span className="wow-span">Wow!</span> you're about to reach
                your targeted band
              </p>
              <GraphCard />
            </div>
            <div className="share-promo">
              <h2>One hare can save many lives</h2>
              <p>
                Your one share can unlock a world of education for unprivileged.
              </p>
              <button className="share-btn"> Share App </button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "14px" }}>
          <h1 className="progress-heading">Prepare with ease</h1>
          <div className="main-head" style={{ display: "flex", gap: "18px" }}>
            <div className="features-container">
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
              <div className="feature-card">
                <img className="feature-image" src={f1} alt="." />
                <p className="feature-text">Reading</p>
              </div>
            </div>
            <div className="" style={{ flexGrow: 1, width: "30%" }}>
              <div className="guide-container">
                <img src={yt} alt="." />
                <p>App Guide Video</p>
              </div>
              <div className="mock-container">
                <h3>Practice Mock Tests</h3>
                <p>
                  Get the authentic IELTS exam experience with all four modules
                  covered!
                </p>
                <button className="start-btn">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
