import React from "react";
import "../styles/search-box.css"
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import {
  UPDATE_SELECTED_USER,
  FETCH_USER_DETAILS
} from "../actions";

const SearchBox = ({
  userDetails,
  className = "",
  handleFetchUser = ()=> {}
}) => {
  let input;
  return (
  <form className={`search-box ${className}`} onSubmit={(ev) => {
      ev.preventDefault();
      handleFetchUser(input.value, userDetails);
  }}>
    <input  placeholder="Search users..."  ref={(_input) => { input = _input;}}  className="search-input display-inine-block"/>
    <button className="search-button display-inine-block">Search</button>
  </form>
  )
};

export default connect((state)=> {return state;}, (dispatch) => {
  return {
    handleFetchUser(userName, userDetails) {
      const currentUserDetails = userDetails[userName];
      if(!isEmpty(currentUserDetails)) {
        return dispatch({ type: UPDATE_SELECTED_USER, userName })
      }
      return dispatch({ type: FETCH_USER_DETAILS, userName})
    }
  }
})(SearchBox);
