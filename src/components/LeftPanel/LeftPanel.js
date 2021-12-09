import React from "react";
import { NavLink } from "react-router-dom";

function LeftPanel() {
  return (
    <div>
      <div className="left-panel">
        <ul>
          <li>
            <NavLink to="/">NewPost</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/docs">Docs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftPanel;
