export default function(state = {}, action) {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
            loading: !state.loading              
        };
      default:
        return state;
    }
  }
  