import React from "react";
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";

function Docs() {
  return (
    <div>
      <TopPanel />
      <div className="admin-page">
        <LeftPanel />
        <div className="content">Documentation</div>
      </div>
    </div>
  );
}

export default Docs;
