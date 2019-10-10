export default function(state = {}, action) {
    switch (action.type) {
      case "STUDENTS":
        return {
          ...state,
            students: state.students.concat(action.payload)
        };
      default:
        return state;
    }
  }