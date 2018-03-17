export const INITIAL_STATE = {
  selected: {
    userName: "",
    displayMode: "INIT",
    pageStatus: "FETCH_INIT"
  },
  repos: {},
  userDetails: {}
};

export const root = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DISPLAY_MODE": {
      return Object.assign({}, state, {
        selected: Object.assign({}, state.selected, { displayMode: action.displayMode })
      });
    }
    case "UPDATE_SELECTED_USER": {
      return Object.assign({}, state, { selected: { userName: action.userName, displayMode: "OVERVIEW" } });
    }
    case "FETCH_USER_DETAILS": {
      return Object.assign({}, state, { selected: {
        userName: action.userName,
        displayMode: "INIT",
        pageStatus: "FETCH_PENDING"
      }});
    }
    case "ON_USER_DETAILS_FETCH": {
      return Object.assign({},state, {
        selected: Object.assign({}, state.selected, {
          userName: action.userName ,
          displayMode: "OVERVIEW",
          pageStatus: "FETCH_COMPLETE"
        }),
        repos: Object.assign({}, state.repos, { [action.userName]: action.repos }),
        userDetails: Object.assign({}, state.userDetails, { [action.userName]: action.userDetails })
      });
    }
    default :
     return state;
  }
};

export default root;
