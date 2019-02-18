import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { ContainerFluid, Center, BgWrapper } from './styles/all-styles';
import { PostsList } from './components/all-components';

class App extends Component {
    render() {
        return (
            <ContainerFluid as="main">
                <BgWrapper>
                    <Center x="true" y="true">
                        <Switch>
                            <Route exact path="/page/:id" component={PostsList} />
                            <Redirect to="/page/1" />
                        </Switch>
                    </Center>
                </BgWrapper>
            </ContainerFluid>
        );
    }
}

export default withRouter(App);