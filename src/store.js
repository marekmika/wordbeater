import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import gameReducer from './reducers/gameReducer';

import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCETi5hsBrdafvVd7P4eeBaC7bOnZ_2pnk',
    authDomain: 'wordbeater-37aa9.firebaseapp.com', 
    databaseURL: 'https://wordbeater-37aa9.firebaseio.com',
    projectId: 'wordbeater-37aa9',
    storageBucket: 'wordbeater-37aa9.appspot.com',
    messagingSenderId: '423376906707'
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firabse
firebase.initializeApp(firebaseConfig);
//Init firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    game: gameReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStoreWithFirebase(
    rootReducers,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        applyMiddleware(...middleWare),
        // Delete this before deploy
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleWare),
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

export default store;
