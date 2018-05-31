import React, { Component } from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import News from './../Components/News';

export default class Announcements extends Component {
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
                <Header active="News" from={"announcements"} navMinified={navMinified}/>
                <News />
                <Footer />
            </div>
        );
    }
}