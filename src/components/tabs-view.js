import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import {
  FETCH_USER_REPOS,
  UPDATE_DISPLAY_MODE  
} from "../actions";
import "../styles/tabs-view.css";

const tabs = [{ id: "OVERVIEW", name: "Overview" }, { id: "REPOS", name: "Repositories"}];

const TabsView = (props) => {
  const {selected = {}, repos ={}, changeDisplayMode} = props;
  const { userName = "", displayMode = "INIT" } = selected;
  if (displayMode === "INIT") return null;

  return (
    <div className="tabs-view">
      {tabs.map(({id, name}) => {
        const activeClass = id === displayMode ? "active" : "";
        return (<div
          key={id}
          onClick={(ev) => {
            changeDisplayMode({
              displayMode: ev.target.dataset.tabId,
              userName,
              repos
            });
          }}
          className={`tab ${activeClass} display-inline-block`}
          data-tab-id={id}>{name}</div>)
      })}
    </div>
  );
};

export default connect(({selected, repos}) => {
  return { selected, repos }
}, (dispatch) => {
  return {
    changeDisplayMode: ({displayMode, userName, repos}) => {
      if(displayMode === "REPOS" && isEmpty(repos[userName])) {
        return dispatch({ type: FETCH_USER_REPOS, displayMode, userName });
      }
      return dispatch({ type: UPDATE_DISPLAY_MODE, displayMode, userName });
    }
  }
})(TabsView);
