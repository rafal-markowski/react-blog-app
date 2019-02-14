import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PostsListBtn } from './all-components';
import mapStateToProps from '../tools/mapStateToProps';
import mapDispatchToProps from '../tools/mapDispatchToProps';

class PostsList extends Component {
    static defaultProps = {
        limit: 10
    };

    constructor(props) {
        super(props);

        const limit = this.props.limit;
        const numberOfPosts = 100;
        const numberOfPages = numberOfPosts / limit;
        const start = [];
        
        for(let i = 0; i <= numberOfPosts - limit; i += limit) {
            start.push(i);
        }

        this.state = {
            numberOfPages,
            numberOfPosts,
            start
        }
    }

    createPostsList() {
        const { numberOfPages, start } = this.state;
        const { getPostsList, limit } = this.props;
        const number = this.props.match.params.id;

        if(number > numberOfPages) {
            getPostsList(start[start.length - 1], limit);
        } else if(number < 1) {
            getPostsList(0, limit);
        } else {
            getPostsList(start[number - 1], limit);
        }
    }
    
    componentDidMount() {
        this.createPostsList();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.createPostsList();
        }
    }

    render() {
        const { list, loading } = this.props.postsList;
        const { numberOfPages } = this.state;
        
        const listItems = list.map(el => <div key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <br/>
            <br/>
        </div>);

        return !loading ? (
            <>
                {listItems}
                <PostsListBtn numberOfPages={numberOfPages} />
            </>
        ) : null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);