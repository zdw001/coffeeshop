import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Pricing from './containers/pricing';
import HowItWorks from './containers/howItWorks';



class App extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/pricing' component={Pricing}/>
                    <Route path='/how-it-works' component={HowItWorks}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
