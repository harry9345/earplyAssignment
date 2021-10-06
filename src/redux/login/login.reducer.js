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
  console.log("payload : ", action.payload);
  switch (action.type) {
    case loginTypes.LOGIN_START:
      return {
        ...state,
        news: action.payload.news,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        userApiKey: action.payload.userApiKey,
        userCategory: action.payload.userCategory,
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
