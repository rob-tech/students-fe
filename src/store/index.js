import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import studentReducer from "../reducers/students";
import errReducer from "../reducers/errMess"
import loadReducer from "../reducers/loader"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  errMess: {
    message: null
  },
  isLoading: {
    loading: false
  },
  allStudents: {
    students: []
  },
};

const combReducer = combineReducers({ allStudents: studentReducer, isLoading: loadReducer, errMess: errReducer});

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
