import React, { Component } from 'react';
import './SliderWA.css';

const SingleSlide = (props) => {
    return (
        <div onClick={props.onclick} style={{backgroundImage:`url('${props.item}')`}} />
    );
};

export default class SliderWA extends Component {
    state = {
        active:0
    };
    componentDidMount = () => {
      let intervalId = window.setInterval(() => this._nextSlide(), 3000);
      this.setState({
          intervalId:intervalId
      });
    };
    _nextSlide = (bool=false) => {
        if(this.state.active === this.props.images.length - 1){
            this.setState({
                active:0
            });
        } else {
            this.setState({
                active:this.state.active + 1
            });
        }
        if(bool === true){
            window.clearInterval(this.state.intervalId);
            let intervalId = window.setInterval(() => this._nextSlide(), 3000);
            this.setState({
                intervalId:intervalId
            });
        }
    }
    _prevSlide = (bool=false) => {
        if(this.state.active === 0){
            this.setState({
                active:this.props.images.length - 1
            });
        } else {
            this.setState({
                active:this.state.active - 1
            });
        }
        if(bool === true){
            window.clearInterval(this.state.intervalId);
            let intervalId = window.setInterval(() => this._nextSlide(), 3000);
            this.setState({
                intervalId:intervalId
            });
        }
    };
    componentWillUnmount = () => {
        window.clearInterval(this.state.intervalId);
    };
    _setItem = (index) => {
        window.clearInterval(this.state.intervalId);
        let intervalId = window.setInterval(() => this._nextSlide(), 3000);
        this.setState({
            intervalId:intervalId
        });
        this.setState({active:index});
    }
    render() {
        let { images } = this.props;
        return (
            <div className={"app-slider-wa-container"}>
                  <div className={"app-slider-wa"}>
                      <i className={"fas fa-chevron-left"} onClick={() => this._prevSlide(true)}/>
                      <div className={"slide-container"}>

                          <SingleSlide item={images[this.state.active]} onclick={() => this._nextSlide(true)} />

                      </div>
                      <i className={"fas fa-chevron-right"} onClick={() => this._nextSlide(true)}/>
                  </div>
                  <h2 align="center" style={{color:"#404040", marginBottom:2}}>Fotoğraf {this.state.active + 1}/{this.props.images.length}</h2>

                  <div className={"dots"}>

                      {[...Array(this.props.images.length)].map((item, index) => <i className={this.state.active === index ? 'fas fa-circle d-active' : 'fas fa-circle'} key={index} onClick={() => this._setItem(index)}>{item}</i>)}

                  </div>

            </div>
        );
    }
}