import React, { Component } from 'react';
import { Consumer } from '../../context';

class GivenWord extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { currentWord } = value;

                    // To unselect the games word
                    const style = {
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        KhtmlUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none'
                    };

                    return (
                        <h2
                            className="text-center mb-5 font-weight-bold"
                            style={style}
                        >
                            {currentWord}
                        </h2>
                    );
                }}
            </Consumer>
        );
    }
}

export default GivenWord;
