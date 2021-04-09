//when there is more than one reducer in one project, 
//we combine them to one using the combineReducers

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos'

const rootReducer = combineReducers({
    counter, 
    todos
});

export default rootReducer;