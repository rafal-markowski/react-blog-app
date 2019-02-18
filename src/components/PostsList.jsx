import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { PostsListBtn } from './all-components';
import { BigImg, ImgWrapper, ImgTitle, A, P, ArticleWrapper } from '../styles/all-styles';
import mapStateToProps from '../tools/mapStateToProps';
import mapDispatchToProps from '../tools/mapDispatchToProps';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.8rem;
    margin-bottom: 2rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
        grid-gap: 2rem 3rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
        grid-template-columns: minmax(min-content, 400px) minmax(min-content, 400px);
    }
`;

const Body = styled(P)`
    padding: 0 0.625rem;
`;

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

        this.ref = React.createRef();
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
        
        const listItems = list.map(el => <article key={el.id}>
            <A to={`../news/${el.id}`}>
                <ImgWrapper as="header">
                    <BigImg src={`https://picsum.photos/580/225?image=${el.id * 2}`} alt="" />
                    <ImgTitle>{el.title}</ImgTitle>
                </ImgWrapper>
            </A>
            <Body>{el.body}</Body>
        </article>);

        return !loading ? (
            <ArticleWrapper>
                <Grid ref={this.ref}>
                    {listItems}
                </Grid>
                <PostsListBtn numberOfPages={numberOfPages} parent={this.ref} loading={loading}/>
            </ArticleWrapper>
        ) : null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);