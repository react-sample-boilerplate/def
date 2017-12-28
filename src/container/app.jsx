// library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// data
// import * as firebase from 'firebase';

// components
import Header from 'comp/Header';

// dummy data
import db from '../dummyData';

// Initialize firebase
// const FB_CONFIG = {
//     apiKey: "AIzaSyBEyVqrQzUVFNAew5zEVGzpbmAw5XxkOIk",
//     authDomain: "react-sample-cmk.firebaseapp.com",
//     databaseURL: "https://react-sample-cmk.firebaseio.com",
//     projectId: "react-sample-cmk",
//     storageBucket: "",
//     messagingSenderId: "586327612038"
// };
// firebase.initializeApp(FB_CONFIG);

// const DB = firebase.database();
// const DBref = DB.ref().child('data');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = db;

        this.btnClick = this.buttonClick.bind(this);
    }

    componentDidMount() {
        
    }

    buttonClick() {
        console.log(this.header);
        $('.header').addClass('wow');
    }

    render() {
        return (
            <div>
                <Header ref={ref => {this.header = ref}} menulist={this.state.menulist} isLoading={true} />
                <button type="button" onClick={this.buttonClick.bind(this)}>addClass of jquery</button>
            </div>    
        )
    }

}

export default App;