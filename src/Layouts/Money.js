import React, { Component } from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import Contact from './../Components/Contact';

export default class Money extends Component {
    state = {
        navMinified:false,
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this._handleScroll);
    }
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this._handleScroll);
    }
    _handleScroll = () => {
        let scrollTop = window.scrollY;
        if(scrollTop >= 170){
            this.setState({
                navMinified:true
            });
        } else {
            this.setState({
                navMinified:false
            });
        }
    }
    render(){
        let { navMinified } = this.state;
        return (
            <div className="app-wrapper">
                <Header active="Announcements" from={"announcements"} navMinified={navMinified}/>
                <Contact />
                <Footer />
            </div>
        );
    }
}