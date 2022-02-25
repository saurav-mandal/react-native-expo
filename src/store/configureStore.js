import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk" 

import { examPageData } from '../reducers/ExamPageReducer';
const rootReducer = combineReducers(
{  
  "examPageData":examPageData
}
);
const configureStore = () => {
return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;

// ovie
// result;
