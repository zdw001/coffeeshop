import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';


class HowItWorks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <p>how it works</p>
            </div>
        )
    }
}

export default withRouter(HowItWorks);