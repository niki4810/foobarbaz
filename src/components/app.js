import React, { Component } from 'react';
import ProfileCard from "./profile-card";
import RepoList from "./repos-list";
import SearchBox from "./search-box";
import TabsView from "./tabs-view";
import Spinner from "./spinner";
import injectSheet from 'react-jss'

import '../styles/app.css';

const appStyles = (theme) => ({
  '@global body': {
    background: theme.background
  },
  app: {
    color: theme.color
  }
});

const THEMES = [{id: "lite", name: "Lite" }, {id: "dark", name: "Dark"}];

const ThemeSelector = ({className = "", handleThemeChange, selectedTheme}) => {
  return (
    <div className={`theme-selector ${className}`}>
      <span>{"Theme : "}</span>
      {
        THEMES.map(({id, name}) => {
          return (
            <label className="theme-label" key={id}>
              <input onChange={handleThemeChange}
                checked={id === selectedTheme}
                type="radio"
                name="theme" value={id}/>
              {` ${name}`}
            </label>
          );
        })
      }
    </div>
  );
};

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.app}>
        <div className={`app`}>
          <ThemeSelector className="app-section" {...this.props}/>
          <SearchBox className="app-section"/>
          <TabsView className="app-section" />
          <ProfileCard className="app-section"/>
          <RepoList className="app-section"/>
          <Spinner/>
        </div>
      </div>
    );
  }
}

export default injectSheet(appStyles)(App);
