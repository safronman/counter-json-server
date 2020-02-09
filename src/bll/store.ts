import {applyMiddleware, combineReducers, createStore} from 'redux';
import counterReducer from './counterReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
