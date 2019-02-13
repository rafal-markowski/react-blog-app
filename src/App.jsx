import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import changeUrl from './tools/changeUrl';
import { Container } from './styles/all-styles';
import { PostsList } from './components/all-components';

class App extends Component {
    componentDidMount() {
        changeUrl(this.props, '/', '/page/1');
    }

    render() {
        return (
            <Container as="main">
                <Switch>
                    <Route exact path="/page/:id" component={PostsList} />
                    <Route render={() => <span>Error 404 :(</span>} />
                </Switch>
            </Container>
        );
    }
}

export default withRouter(App);