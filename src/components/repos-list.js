import React from "react";
import "../styles/repos-list.css";
import { connect } from "react-redux";

const ReposList = ({repos = [], className = ""}) => (  
  <div className={`repos-list container ${className}`}>    
    {repos.length > 0 && <h1 className="repos-heading">Repositories</h1>}
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

export default connect(({selected, repos}) => {
  const { userName } = selected;
  const _repos = repos[userName];
  return { repos: _repos };
})(ReposList);
