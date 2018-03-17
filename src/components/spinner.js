import React from "react";
import { connect } from "react-redux";
import "../styles/spinner.css";

const Spinner = ({pageStatus}) => {
  if(pageStatus === "FETCH_PENDING") {
    return (
      <div className="spinner-container">
        <div className="spinner"/>
      </div>
    );
  }
  return null;
};

export default connect(({selected}) => {
  const {pageStatus} = selected;
  return {pageStatus};
})(Spinner);
