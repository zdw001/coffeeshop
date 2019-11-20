import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <p>about</p>
            </div>
        )
    }
}

export default withRouter(About);