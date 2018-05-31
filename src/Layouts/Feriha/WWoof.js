import React, { Component } from 'react';
import Header from './../../Components/Header';
import Erasmus from './../../Components/Erasmus';
import Footer from './../../Components/Footer';

import A1 from './../../Assets/adim_1.png';
import A2 from './../../Assets/adim_2.png';
import A3 from './../../Assets/adim_3.jpg';
import A4 from './../../Assets/adim_4.png';
import A5 from './../../Assets/adim_5.jpg';

export default class WWoof extends Component {
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
    render() {
        let stepsImages = [ A1, A2, A3, A4, A5 ];
        let { navMinified } = this.state;
        return (
            <div className="app-wrapper">
                <Header from="feriha" active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:100}} />
                <Erasmus images={stepsImages} />
                <Footer />
            </div>
        );
    }
}