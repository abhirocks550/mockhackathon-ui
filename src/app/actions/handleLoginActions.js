export const updateLoginInput = (event) => {
  return {
      type: 'LOGIN_UPDATE_INPUT',
      payload: event.target,
    };
}
