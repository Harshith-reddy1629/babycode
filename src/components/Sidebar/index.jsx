import React from "react";
import { FiHome } from "react-icons/fi";
import { PiUsersBold } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { MdOutlineFeedback } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import story from "../../assets/story.png";
import "./index.css";
import PremiumCard from "../PremiumCard";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <img src="" alt=".." />
        <ul className="sidebar-u-list">
          <li>
            <FiHome size={22} /> Home
          </li>
          <li>
            <PiUsersBold size={22} /> Community
          </li>
          <li>
            {" "}
            <img src={story} alt=".." height={22} /> Stories
          </li>
          <li>
            <BsShopWindow size={22} /> Shop
          </li>
          <li>
            <MdOutlineFeedback size={22} /> Feedback
          </li>
        </ul>
      </div>
      <div>
        <PremiumCard />
        <button className="logout-btn">
          <LuLogOut /> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
