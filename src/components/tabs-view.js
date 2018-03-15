import React from "react";
import "../styles/tabs-view.css";

const TabsView = (props) => {
  return (
    <div className="tabs-view">
      <div className="tab active display-inline-block">Overview</div>
      <div className="tab display-inline-block">Repos</div>
    </div>
  );
};

export default TabsView;