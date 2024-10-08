import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [Extended, SetExtended] = useState();
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {Extended ? <p>New Chat</p> : null}
        </div>
        {Extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p className="">What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
