import React, { Component } from 'react';
import './FerihaContent.css';

export default class FerihaContent extends Component {
    render(){
        return (
            <section className={"feriha-content-wrapper"}>
                <p>{this.props.info}</p>
            </section>
        );
    }
}