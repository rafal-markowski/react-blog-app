import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    
    componentDidMount() {
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

    render() {
        const { list, loading } = this.props.postsList;
        const listItems = list.map(el => <div key={el.id}>
            <p>{el.id}</p>
            <br/>
            <br/>
        </div>);

        return (
            <>
                {loading && <span>Loading...</span>}
                {listItems}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);