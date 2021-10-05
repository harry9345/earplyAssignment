import loginTypes from "./login.types";

const INITIAL_STATE = {
  userName: null,
  userEmail: null,
  userApiKey: null,
  userCategory: null,
  news: null,
  userErorr: [],
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_START:
      return {
        ...state,
        news: state.news,
        userName: state.userName,
        userEmail: state.userEmail,
        userApiKey: state.userApiKey,
        userCategory: state.userCategory,
      };
    case loginTypes.LOGOUT_START:
      return {
        ...state,
        news: null,
        userName: null,
        userEmail: null,
        userApiKey: null,
        userCategory: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
