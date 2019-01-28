import React, { Component } from 'react';
import Header from './components/layout/Header';
import WordInput from './components/base/WordInput';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <WordInput />
            </div>
        );
    }
}

export default App;
