import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: this.props.menulist,
            klass: 'a'
        };
    }

    render() {

        let { menu } = this.state;

        let list = menu.map((cv, i) => {
            return <li key={i}>{cv}</li>;
        });

        return (
            <header className="header">
                <ul className={klass}>{ list }</ul>
            </header>
        );
    }

}

export default Header;