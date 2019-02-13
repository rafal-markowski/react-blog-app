import { combineReducers } from 'redux';

import postsList from './postsList.reducer';

const reducers = combineReducers({
    postsList
});

export default reducers;