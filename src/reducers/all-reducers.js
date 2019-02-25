import { combineReducers } from 'redux';

import postsList from './postsList.reducer';
import scroll from './scroll.reducer';

const reducers = combineReducers({
    postsList,
    scroll
});

export default reducers;