import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserIsAuthenticated , UserIsNotAuthenticated } from './helpers/auth';
import Header from './components/layout/Header';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Game from './components/layout/Game';
import HighScoreComponent from './components/base/HighScoreComponent';


import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
                        <div className="col-lg-8 mx-auto">
                            <Switch>
                                <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
                                <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
                                <Route exact path="/" component={UserIsAuthenticated(Game)} />
                                <Route exact path="/score" component={UserIsAuthenticated(HighScoreComponent)} />
                              </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
