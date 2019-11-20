import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show_header: false
        };


        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll() {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (scroll >= 20) {
            if (!this.state.show_header) {
                document.getElementById('header').style.backgroundColor = "#fff";
                document.getElementById('header').style.height = "60px";
                document.getElementById('header').style.borderBottom = "1px solid rgba(75, 75, 75, 0.4)";


                document.getElementById('header-title').style.color = "#663300";
                document.getElementById('header-title').style.margin = "10px 0";

                document.getElementById('header-icon').style.color = "#663300";
                document.getElementById('header-icon').style.margin = "10px 20px 10px 40px";

                document.getElementById('header-nav').style.padding = "20px 40px 20px 10px";

                document.getElementById('header-nav-1').style.color = "#663300";
                document.getElementById('header-nav-2').style.color = "#663300";
                document.getElementById('header-nav-3').style.color = "#663300";

                document.getElementById('header-nav-1').classList.remove('no-background');
                document.getElementById('header-nav-2').classList.remove('no-background');
                document.getElementById('header-nav-3').classList.remove('no-background');


                this.setState({
                    show_header: true
                });
            }
        } else if (scroll <= 20) {
            if (this.state.show_header) {
                document.getElementById('header').style.backgroundColor = "transparent";
                document.getElementById('header').style.height = "120px";
                document.getElementById('header').style.borderBottom = "none";


                document.getElementById('header-title').style.color = "#fff";
                document.getElementById('header-title').style.margin = "40px 0";

                document.getElementById('header-icon').style.color = "#fff";
                document.getElementById('header-icon').style.margin = "40px 40px 40px 60px";

                document.getElementById('header-nav').style.padding = "50px 60px 50px 10px";

                document.getElementById('header-nav-1').style.color = "#fff";
                document.getElementById('header-nav-2').style.color = "#fff";
                document.getElementById('header-nav-3').style.color = "#fff";

                document.getElementById('header-nav-1').classList.add('no-background');
                document.getElementById('header-nav-2').classList.add('no-background');
                document.getElementById('header-nav-3').classList.add('no-background');

                this.setState({
                    show_header: false
                })
            }
        }
    }

    render() {
        return (
            <div className="header" id="header">
                <FontAwesomeIcon className="coffee-icon" id="header-icon" icon={faMugHot} size={"2x"}/>
                <h1 id="header-title">Coffee Shop Consulting</h1>
                <div className="space"></div>
                <div className="nav" id="header-nav">
                    <Link to="/how-it-works" className="no-background" id="header-nav-1">How it works</Link>
                    <Link to="/about" className="no-background" id="header-nav-2">About us</Link>
                    <Link to="/pricing" className="no-background" id="header-nav-3">Pricing</Link>
                    <Link to="/contact" id="header-nav-4" className="button">Contact</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)