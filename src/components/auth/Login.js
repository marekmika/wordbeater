import React, { Component } from 'react';
import { compose } from 'redux';
import { firebaseConnect} from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    onSubmit = e => {
        e.preventDefault();

        const { firebase } = this.props;
        const { email, password } = this.state;

        firebase
            .login({
                email,
                password
            })
            .catch(err => alert('Invalid login.'));
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 mx-auto" style={{ top: "20px"}}>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="text-center pb-4 pt-3">
                                    <span className="text-secondary">
                                        <i className="fas fa-sign-in-alt" />{' '}
                                        Login
                                    </span>
                                </h1>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>{' '}
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            required
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="email">Pasword</label>{' '}
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            required
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        <hr />
                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn-secondary btn-block"
                                        />
                                    </div>
                                    <hr />
                                    Don't have an account? <Link to="/register">Sign up</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default compose(
    firebaseConnect()
)(Login);
