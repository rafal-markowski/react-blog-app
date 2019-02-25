import actions from '../actions/all-actions';

const mapDispatchToProps = dispatch => ({
    getPostsList: (start, limit) => dispatch(actions.postsList.asyncFetchPostsList(start, limit)),
    setScrollElement: (name, element) => dispatch(actions.scroll.setScroll(name, element))
});

export default mapDispatchToProps;