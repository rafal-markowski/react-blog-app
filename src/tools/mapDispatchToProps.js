import actions from '../actions/all-actions';

const mapDispatchToProps = dispatch => ({
    getPostsList: (start, limit) => dispatch(actions.postsList.asyncFetchPostsList(start, limit))
});

export default mapDispatchToProps;