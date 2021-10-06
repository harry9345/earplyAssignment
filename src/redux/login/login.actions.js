import loginTypes from "./login.types";

export const loginEmailStart = (info) => ({
  type: loginTypes.LOGIN_START,
  payload: info,
});

export const logoutEmailStart = () => ({
  type: loginTypes.LOGOUT_START,
});
