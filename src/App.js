import React, { Component } from 'react';
import Header from './components/layout/Header';
import GameInfo from './components/base/GameInfo';
import GameInput from './components/base/GameInput';
import HighScoreComponent from './components/base/HighScoreComponent';
import LevelSelection from './components/base/LevelSelection';
import GivenWord from './components/base/GivenWord';
import Overview from './components/base/Overview';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header />
                    <div className="col-lg-8 mx-auto">
                            <Overview />
                            <GivenWord />
                            <GameInput />
                            <GameInfo />
                            <LevelSelection />
                            <HighScoreComponent />
                        </div>
                </div>
            </Provider>
        );
    }
}

export default App;
