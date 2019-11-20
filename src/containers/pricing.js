import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';


class Pricing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <p>pricing</p>
            </div>
        )
    }
}

export default withRouter(Pricing);