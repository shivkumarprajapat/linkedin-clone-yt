import React from "react";
import { Avatar } from "@material-ui/core";
import './sidebar.css'
function Sidebar() {

  const recentItem = (topic) => {
    <div className="sidebar_recentItem">
      <div className="sidebar_hash">#</div>
      <p>{topic}</p>
    </div>
  }

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar className="sidebar_avatar" />
        <h3>Shiv Kumar</h3>
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
