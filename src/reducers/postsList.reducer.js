import actions from '../actions/all-actions';

const initState = {
    list: [],
    loading: false,
    errorMsg: ''
};

const a = actions.postsList;

const postsList = (state = initState, action) => {
    switch(action.type) {
        case a.FETCH_POSTS_LIST: 
            return {
                ...state, 
                list: action.list,
                loading: false
            };
        case a.LOADING_POSTS_LIST:
            return {
                ...state,
                loading: true
            };
        case a.ERROR_POSTS_LIST:
            return {
                ...state,
                errorMsg: 'ERROR :(',
                loading: false
            };
        default:
            return state;
    }
}

export default postsList;