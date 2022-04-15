export const setNotification = (message, type, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: "SHOW",
      data: { message, type },
    });
    await new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            dispatch({
              type: "HIDE",
              data: null,
            })
          ),
        seconds * 1000
      );
    });
  };
};
