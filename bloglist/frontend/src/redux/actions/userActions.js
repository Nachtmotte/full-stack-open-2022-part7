import userService from "../../services/user";
import loginService from "../../services/login";

export const userLogin = (username, password) => {
  return async (dispatch) => {
    const userLogged = await loginService.login({ username, password });
    userService.setUser(userLogged);
    dispatch({
      type: "LOGIN",
      data: userLogged,
    });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    userService.clearUser();
    dispatch({
      type: "LOGOUT",
      data: null,
    });
  };
};

export const initUser = () => {
  return (dispatch) => {
    const userFromStorage = userService.getUser();
    dispatch({
      type: "SET_USER",
      data: userFromStorage,
    });
  };
};

export const initUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users,
    });
  };
};
