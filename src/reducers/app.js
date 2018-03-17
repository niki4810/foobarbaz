import { combineReducers } from 'redux'

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
    case "UPDATE_DISPLAY_MODE": {
      return Object.assign({}, state, {
        displayMode: action.displayMode
      });
    }
    case "UPDATE_SELECTED_USER": {
      return Object.assign({}, state, { userName: action.userName, displayMode: "OVERVIEW" });
    }
    case "FETCH_USER_DETAILS": {
      return Object.assign({}, state, {
        userName: action.userName,
        displayMode: "INIT",
        pageStatus: "FETCH_PENDING"
      });
    }
    case "ON_USER_DETAILS_FETCH": {
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
    case "ON_USER_DETAILS_FETCH": {
      return Object.assign({}, state, { [action.userName]: action.repos })
    }
    default :
     return state;
  }
};

export const userDetails = (state=INITIAL_STATE.userDetails, action) => {
  switch (action.type) {
    case "ON_USER_DETAILS_FETCH": {
      return Object.assign({}, state, { [action.userName]: action.userDetails });
    }
    default :
     return state;
  }
};

export const root = combineReducers({
  selected,
  repos,
  userDetails
});

export default root;
