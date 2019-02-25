import actions from '../actions/all-actions';

const initState = {
    element: {}
};

const a = actions.scroll;

const scroll = (state = initState, action) => {
    switch(action.type) {
        case a.SET_SCROLL: 
            const obj = {};
            obj[action.name] = action.element;

            return {
                ...state,
                element: { ...state.element, ...obj }
            };
        default:
            return state;
    }
}

export default scroll;