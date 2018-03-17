import React, { Component } from 'react';
import ProfileCard from "./profile-card";
import RepoList from "./repos-list";
import SearchBox from "./search-box";
import TabsView from "./tabs-view";
import Spinner from "./spinner";

import '../styles/app.css';

const repos = [{
  "id": 29364118,
  "name": "annyang",
  "html_url": "https://github.com/niki4810/annyang",
  "description": "A javascript library for adding voice commands to your site, using speech recognition."
}, {
    "id": 35351287,
    "name": "Blogger",
    "html_url": "https://github.com/niki4810/Blogger",
    "description": "A simple blogging app using Node"
}];

const userDetails = {
  "login": "niki4810",
  "id": 1467801,
  "avatar_url": "https://avatars1.githubusercontent.com/u/1467801?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/niki4810",
  "html_url": "https://github.com/niki4810",
  "followers_url": "https://api.github.com/users/niki4810/followers",
  "following_url": "https://api.github.com/users/niki4810/following{/other_user}",
  "gists_url": "https://api.github.com/users/niki4810/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/niki4810/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/niki4810/subscriptions",
  "organizations_url": "https://api.github.com/users/niki4810/orgs",
  "repos_url": "https://api.github.com/users/niki4810/repos",
  "events_url": "https://api.github.com/users/niki4810/events{/privacy}",
  "received_events_url": "https://api.github.com/users/niki4810/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nikhilesh Katakam",
  "company": "Walmart Global eCommerce",
  "blog": "http://niki4810.github.io/about/",
  "location": "San Mateo CA",
  "email": null,
  "hireable": null,
  "bio": "Frontend developer for life.",
  "public_repos": 43,
  "public_gists": 3,
  "followers": 20,
  "following": 16,
  "created_at": "2012-02-24T01:26:19Z",
  "updated_at": "2018-03-15T02:27:42Z"
};
class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBox className="app-section"/>
        <TabsView className="app-section" />
        <ProfileCard className="app-section"/>
        <RepoList className="app-section"/>
        <Spinner/>
      </div>
    );
  }
}

export default App;
