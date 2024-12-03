import { combineReducers } from 'redux';
import whoReducer from './who-reducer';

const rootReducer = combineReducers({
    who: whoReducer,
    // ... 其他 reducers
});

export default rootReducer; 