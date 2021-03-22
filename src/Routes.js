import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import ExampleOne from './ExampleOne';
import MyForm from './MyForm';

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={ Home } />
                        <Route path="/exampleone" exact={true} component={ ExampleOne } />
                        <Route path="/exampletwo" exact={true} component={ MyForm } />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;
