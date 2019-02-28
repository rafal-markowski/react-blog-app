import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ContainerFluid, Center } from './styles/all-styles';
import { PostsList, Newsletter, Question, TopButton, Footer, Navbar } from './components/all-components';
import mapStateToProps from './tools/mapStateToProps';
import mapDispatchToProps from './tools/mapDispatchToProps';

const Scroll = styled.div`
    overflow-y: scroll;
    height: 100vh;
`;

const Column = styled(Center)`
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.bg.secondary };

    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        padding: 2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        flex-direction: row;
        padding: 3rem 2rem;
    }
`;

const Left = styled.main`
    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        padding-right: 2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.xl }) {
        padding-right: 3rem;
    }
`;

const Right = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-gap: 1rem;
    margin-top: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        grid-gap: 3rem 2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.md }) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        grid-template-columns: 1fr;
        flex-basis: 300px;
        margin-top: 0;
        padding-left: 2rem;
        border-left: 1px solid ${({ theme }) => theme.border.color };
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.xl }) {
        padding-left: 3rem;
    }
`;

class App extends Component {
    constructor(props) {
        super(props);
        
        this.scrollRef = React.createRef();
        this.props.setScrollElement('global', this.scrollRef);
    }

    render() {
        return (
            <Scroll ref={this.scrollRef}>
                <Navbar />
                <ContainerFluid>
                    <Column direction="column" y={null}>
                        <Left>
                            <Switch>
                                <Route exact path="/page/:id" component={PostsList} />
                                <Redirect to="/page/1" />
                            </Switch>
                        </Left>
                        <Right>
                            <Newsletter />
                            <Question />
                        </Right>
                    </Column>
                    <Footer />
                </ContainerFluid>
                <TopButton />
            </Scroll>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));