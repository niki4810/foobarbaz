export const INITIAL_STATE = {
  selected: {
    userName: "",
    displayMode: "INIT"
  },
  repos: {},
  userDetails: {}
};

export const root = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_USER":
    case "FETCH_USER_DETAILS": {
      return Object.assign({}, state, { selected: { userName: action.userName } });
    }
    case "ON_USER_DETAILS_FETCH": {
      return Object.assign({},state, {
        repos: Object.assign({}, state.repos, { [action.userName]: action.repos }),
        userDetails: Object.assign({}, state.userDetails, { [action.userName]: action.userDetails })
      });
    }
    default :
     return state;
  }
};

export default root;