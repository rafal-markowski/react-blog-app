import { getPostsList } from '../tools/api';

export const FETCH_POSTS_LIST = 'FETCH_POSTS_LIST';
export const LOADING_POSTS_LIST = 'LOADING_POSTS_LIST';
export const ERROR_POSTS_LIST = 'ERROR_POSTS_LIST';

export const fetchPostsList = list => ({
    type: FETCH_POSTS_LIST,
    list
});

export const loadingPostsList = () => ({
    type: LOADING_POSTS_LIST
});

export const errorPostsList = () => ({
    type: ERROR_POSTS_LIST
});

export const asyncFetchPostsList = (start, limit) => async dispatch => {
    dispatch(loadingPostsList());

    const data = await getPostsList(start, limit);

    if(data.length > 0) {
        dispatch(fetchPostsList(data));
    } else {
        dispatch(errorPostsList());
    }
}