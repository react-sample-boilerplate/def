// library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/Header';

// dummy data
import db from './dummyData';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = db;

        this.btnClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        let changeState = {klass: 'b'};
        this.setState(changeState);
    }

    render() {
        return (
            <div>
                <Header menulist={this.state.menulist} />
            </div>
        )
    }

}


ReactDOM.render(<App />, document.querySelector("#app"));