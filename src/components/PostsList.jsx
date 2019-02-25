import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { PostsListBtn, Loading } from './all-components';
import { BigImg, ImgWrapper, ImgTitle, A, P } from '../styles/all-styles';
import mapStateToProps from '../tools/mapStateToProps';
import mapDispatchToProps from '../tools/mapDispatchToProps';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-bottom: 3rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        grid-gap: 3rem 2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.md }) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        grid-template-columns: repeat(2, minmax(min-content, 330px));
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoint.xl }) {
        grid-template-columns: repeat(2, minmax(min-content, 370px));
        grid-gap: 3rem;
    }
`;

const Body = styled(P)`
    @media (max-width: ${({ theme }) => theme.breakpoint.sm }) {
        padding: 0 0.625rem;
    }
`;

class PostsList extends Component {
    static defaultProps = {
        limit: 10
    };
    
    state = {
        list: [],
        numberOfPages: 0,
        numberOfPosts: 0,
        start: 0
    }

    constructor(props) {
        super(props);

        this.contentRef = React.createRef();
        this.props.setScrollElement('content', this.contentRef);
    }

    changeList() {
        const { limit, match } = this.props;
        const { list } = this.props.postsList;

        const start = (match.params.id - 1) * limit;
        
        return list.slice(start, start + limit);
    }

    async componentDidMount() {
        await this.props.getPostsList();

        const { list } = this.props.postsList;
        const { limit, match, history } = this.props;
        
        const numberOfPosts = list.length;
        const numberOfPages = parseInt(numberOfPosts / limit);

        if(match.params.id < 1) {
            history.push('/page/1');
        } else if(match.params.id > numberOfPages) {
            history.push(`/page/${numberOfPages}`);
        }

        this.setState({ 
            list: this.changeList(),
            numberOfPages,
            numberOfPosts
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({
                list: this.changeList()
            });
        }
    }

    render() {
        const { loading } = this.props.postsList;
        const { list, numberOfPages } = this.state;
        
        const listItems = list.map(el => <article key={el.id}>
            <A to={`../news/${el.id}`}>
                <ImgWrapper as="header">
                    <BigImg img={`https://loremflickr.com/680/225/paris?random=${el.id}`} />
                    <ImgTitle>{el.title}</ImgTitle>
                </ImgWrapper>
            </A>
            <Body>{el.body}</Body>
        </article>);

        return !loading ? (
            <>
                <Grid ref={this.contentRef}>
                    {listItems}
                </Grid>
                <PostsListBtn numberOfPages={numberOfPages} />
            </>
        ) : (<Loading />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);