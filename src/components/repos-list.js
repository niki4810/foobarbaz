import React from "react";
import isEmpty from "lodash/isEmpty";
import "../styles/repos-list.css";
import { connect } from "react-redux";

const ReposList = ({ repos = [], className = "", displayMode}) => {
  if (displayMode !== "REPOS" || isEmpty(repos)) return null;
  return (<div className={`repos-list bordered-box container ${className}`}>
      {repos.map((repo) => {
        const { id, name, html_url, description } = repo;
        return (
          <div className="repos-list-item section large" key={id}>
            <a
              href={html_url}
              className="repo-name display-block">
              {name}
            </a>
            <div className="repo-description">{description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default connect(({selected, repos}) => {
  const { userName, displayMode } = selected;
  const _repos = repos[userName];
  return { repos: _repos, displayMode };
})(ReposList);
