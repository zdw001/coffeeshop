import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="home container-first">
                    <h1>
                        Providing modern, secure, stylish software solutions for:
                    </h1>
                    <span style={{marginLeft: 'calc(13vw + 60px'}}>e-commerce stores</span><br/>
                    <span style={{marginLeft: 'calc(13vw + 164px'}}>SaaS solutions</span><br/>
                    <span style={{marginLeft: 'calc(13vw + 300px'}}>websites</span><br/>
                </div>
                <div className="home container-second">
                    <h1>something</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)