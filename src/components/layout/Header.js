import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Header extends Component {
    state = {
        isAuthenticated: false
    };

    static getDerivedStateFromProps(props, state) {
        const { auth } = props;

        if (auth.uid) {
            return { isAuthenticated: true };
        } else {
            return { isAuthenticated: false };
        }
    }

    onLogoutClick = e => {
        e.preventDefault();

        const { firebase } = this.props;

        firebase.logout();
    };

    render() {
        const { isAuthenticated } = this.state;
        const { auth } = this.props;

        return (
            <nav className="navbar-default navbar-expand-sm bg-dark text-light">
                <div className="container-fluid d-flex">
                    <nav className="navbar-header">
                        <a href="/" className="navbar-brand text-light">
                            WordBeater
                        </a>
                        {isAuthenticated ? (
                            <ul className="nav navbar-nav">
                                <p className="navbar-text">Email: {auth.email}</p>
                                <li><a
                                    href="/score"
                                    className="nav-link text-light"
                                >
                                    Best scores
                                </a></li>
                                <li><a
                                    href="#!"
                                    className="nav-link text-light"
                                    onClick={this.onLogoutClick}
                                >
                                    Logout
                                </a></li>
                            </ul>
                        ) : null}
                    </nav>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
};

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(Header);
