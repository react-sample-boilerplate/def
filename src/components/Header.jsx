import React, { Component } from 'react';

import withLoading from './withLoading';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: this.props.menulist,
        };
    }

    render() {

        let { menu } = this.state;

        let list = menu.map((cv, i) => {
            return (
                <li key={i}>{cv}</li>
            );
        });

        return (
            <header className="header">
                <ul className={this.state.klass}>{ list }</ul>
            </header>
        );
    }

}

export default withLoading(Header);