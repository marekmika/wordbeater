import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Register extends Component {
    state = {
        nick: '',
        email: '',
        password: '',
        passwordSecond: ''
    };

    onSubmit = e => {
        e.preventDefault();

        const { firebase, firestore } = this.props;
        const { nick, email, password, passwordSecond } = this.state;

        if (password !== passwordSecond) {
            alert('Passwords are not same!');
            this.setState({password: '', passwordSecond: ''});
            return;
        }

        const user = {
            nick,
            email: email.toLocaleLowerCase(),
            AdvancedScore: 0,
            BeginnerScore: 0,
            InsameScore: 0,
        };

        // Register with firebase
        firebase
            .createUser({ email, password })
            .then(() => {
                firestore
                    .add({ collection: 'gamers' }, user)
                    .then(() => console.log('Done'));
            })
            .catch(err => alert('That User Already Exists', 'error'));
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-6 mx-auto" style={{ top: "20px"}}>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-secondary">
                                    <i className="fas fa-user-plus" /> Register
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="nick">Nick</label>{' '}
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nick"
                                        required
                                        value={this.state.nick}
                                        onChange={this.onChange}
                                    />
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
                                    <label htmlFor="email">Confirm pasword</label>{' '}
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="passwordSecond"
                                        required
                                        value={this.state.passwordSecond}
                                        onChange={this.onChange}
                                    />
                                    <hr />
                                    <input
                                        type="submit"
                                        value="Register"
                                        className="btn-secondary btn-block"
                                    />
                                     <hr />
                                    Back to login? <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
};

export default compose(
    firebaseConnect(),
    firestoreConnect([{ collection: 'gamers' }])
)(Register);
