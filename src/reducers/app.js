import { combineReducers } from 'redux'
import {
  UPDATE_DISPLAY_MODE,
  UPDATE_SELECTED_USER,
  FETCH_USER_REPOS,
  ON_USER_REPOS_FETCH,
  FETCH_USER_DETAILS,
  ON_USER_DETAILS_FETCH
} from "../actions";

export const INITIAL_STATE = {
  selected: {
    userName: "",
    displayMode: "INIT",
    pageStatus: "FETCH_INIT"
  },
  repos: {},
  userDetails: {}
};

export const selected = (state = INITIAL_STATE.selected, action) => {
  switch(action.type) {
    case UPDATE_DISPLAY_MODE: {
      return Object.assign({}, state, {
        displayMode: action.displayMode
      });
    }
    case UPDATE_SELECTED_USER: {
      return Object.assign({}, state, { userName: action.userName, displayMode: "OVERVIEW" });
    }
    case FETCH_USER_REPOS: {
      return Object.assign({}, state, {
        userName: action.userName,
        displayMode: "REPOS",
        pageStatus: "FETCH_PENDING"
      });
    }

    case FETCH_USER_DETAILS: {
      return Object.assign({}, state, {
        userName: action.userName,
        displayMode: "INIT",
        pageStatus: "FETCH_PENDING"
      });
    }

    case ON_USER_REPOS_FETCH: {
      return Object.assign({}, state, {
        userName: action.userName ,
        displayMode: "REPOS",
        pageStatus: "FETCH_COMPLETE"
      });
    }

    case ON_USER_DETAILS_FETCH: {
      return Object.assign({}, state, {
        userName: action.userName ,
        displayMode: "OVERVIEW",
        pageStatus: "FETCH_COMPLETE"
      });
    }
    default:
     return state;
  }
};

export const repos = (state = INITIAL_STATE.repos, action ) => {
  switch (action.type) {
    case ON_USER_REPOS_FETCH: {
      return Object.assign({}, state, { [action.userName]: action.repos })
    }
    default :
     return state;
  }
};

export const userDetails = (state=INITIAL_STATE.userDetails, action) => {
  switch (action.type) {
    case ON_USER_DETAILS_FETCH: {
      return Object.assign({}, state, { [action.userName]: action.userDetails });
    }
    default :
     return state;
  }
};

export const root = combineReducers({ selected, repos, userDetails });
export default root;
