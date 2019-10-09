export default function(state = {}, action) {
    switch (action.type) {
      case "ERR_MSG":
        return {
          ...state,
          errMess: {
            ...state.errMess,
            message: state.errMess.message
          }
        };
      case "LOADING":
        return {
          ...state,
          isLoading: {
            ...state.isLoading,
            loading: 
              !state.isLoading.loading
  
            
          }
        };
      default:
        return state;
    }
  }
  