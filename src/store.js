import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as newsReducer } from "./reducers";

const reducer = combineReducers({
    newsReducer: newsReducer
});

export default createStore(reducer, applyMiddleware(thunk));
