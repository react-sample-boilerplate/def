import React, { Component } from 'react';
import ReactDOM from 'react-dom';



// import Header from './components/Header';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menulist: [
                '하나',
                '두울',
                '세엣',
                '네엣'
            ],
            klass: 'a'
        };

        this.btnClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.setState({
            // menulist: ['one', 'two', 'three', 'four']
            klass: 'b'
        });
    }

    render() {
        return (
            <div>
                <h1>안녕하세요.</h1>
                {/* <Header menulist={this.state.menulist} /> */}
                <button type="button"
                        onClick={this.btnClick}>
                    클릭
                </button>
                <div className={this.state.klass}>
                    {this.state.menulist}
                </div>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.querySelector("#app"));