import React from "react";
import { connect } from "react-redux";
import "../styles/tabs-view.css";

const tabs = [{ id: "OVERVIEW", name: "Overview" }, { id: "REPOS", name: "Repositories"}];

const TabsView = (props) => {
  const { displayMode = "INIT", changeDisplayMode } = props;
  if (displayMode === "INIT") return null;

  return (
    <div className="tabs-view">
      {tabs.map(({id, name}) => {
        const activeClass = id === displayMode ? "active" : "";        
        return (<div
          key={id}
          onClick={(ev) => { changeDisplayMode(ev.target.dataset.tabId); }}
          className={`tab ${activeClass} display-inline-block`}
          data-tab-id={id}>{name}</div>)
      })}
    </div>
  );
};

export default connect(({selected}) => {
  return selected
}, (dispatch) => {
  return {
    changeDisplayMode: (displayMode) => {
      return dispatch({ type: "UPDATE_DISPLAY_MODE", displayMode })  
    }
  }
})(TabsView);