export const updateInput = (event) => {
  return {
      type: 'AC_UPDATE_INPUT',
      payload: event.target,
    };
}
