import loginTypes from "./login.types";

export const loginEmailStart = () => ({
  type: loginTypes.LOGIN_START,
});

export const logoutEmailStart = () => ({
  type: loginTypes.LOGOUT_START,
});
