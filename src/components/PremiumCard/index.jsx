import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./index.css";

function PremiumCard() {
  return (
    <div className="premium-card">
      <h3 className="premium-heading">Explore premium features with ease!</h3>
      <ul className="premium-ul">
        <li>
          <FaRegCheckCircle /> Unlimited Speaking Test Access
        </li>
        <li>
          <FaRegCheckCircle /> Unlimited Writing Test Access
        </li>
        <li>
          <FaRegCheckCircle /> Analyze Your Answer
        </li>
        <li>
          <FaRegCheckCircle /> Check Band Score
        </li>
      </ul>
      <div className="price-container">
        <p className="price">Only @299</p>
        <button className="price-btn">
          Buy Now <IoArrowForwardCircleOutline size={22} />{" "}
        </button>
      </div>
    </div>
  );
}

export default PremiumCard;
