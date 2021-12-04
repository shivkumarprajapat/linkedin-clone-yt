import React from "react";
import './sidebar.css';
import { Avatar } from "@material-ui/core";

function Sidebar() {

  const recentItem = (topic) => (<div className="sidebar_recentItem">
    <div className="sidebar_hash">#</div>
    <p>{topic}</p>
  </div>)

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="bg.jpeg" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Shiv Kumar</h2>
        <h4>shiv@examle.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_starNumber">2,523</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_starNumber">2,523</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;