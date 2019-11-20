import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <p>contact</p>
            </div>
        )
    }
}

export default withRouter(Contact);