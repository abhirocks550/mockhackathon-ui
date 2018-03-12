import * as initialStates from '../common/InitialStates';

const addCourseReducer = (state = initialStates.addCourse, action) => {
    switch (action.type) {
    case 'AC_UPDATE_INPUT':
      state = {
          ...state,
          [action.payload.name]: action.payload.value,
        };
    break;
  }
    return state;
  };

export default addCourseReducer;
