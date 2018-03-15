import React from "react";
import '../styles/profile-card.css';
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";

const ProfileCard = (props) => {
  const { userDetails, className, displayMode} = props;
  if(displayMode !== "OVERVIEW") return null;
  const { avatar_url, name, login, bio, company, location, blog } = userDetails;
  return (
    <div className={`profile-card bordered-box container ${className}`}>
      <div className="profile-pic section">
        <img className="profile-img" src={avatar_url} />
      </div>
      <div className="bio-container section">
        <div className="user-name">{name}</div>
        <div className="user-id">{login}</div>
        <div className="user-bio">{bio}</div>
      </div>
      <div className="contact-container section">
        <div className="user-company">{company}</div>
        <div className="user-location">{location}</div>
        <a className="user-website" href={blog}>{blog}</a>
      </div>
    </div>
  );
};

export default connect(({ selected, userDetails }) => {
  const { userName , displayMode } = selected;
  const _userDetails = userDetails[userName];
  return {
   userDetails: _userDetails,
   displayMode
  };
})(ProfileCard);