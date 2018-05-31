import React, { Component } from 'react';
import './Slider.css';

export default class Slider extends Component {
  state = {
    active:0,
    images:this.props.images
  }
  componentDidMount = () => {
    setInterval(this._setSlide, 3000);
  }
  _setSlide = () => {
    let { active } = this.state;
    let { images } = this.props;
    this.setState({
      active:active === (images.length - 1) ? 0 : active + 1
    });
  }
  render(){
    let { active } = this.state;
    let { images } = this.props;
    return (
      <div className="img-container" style={{background:`url('${images[active]}') no-repeat center #000 / cover`}}>
        <div className="dumb-transparency">
          <h1>Gençliği Deneyimle</h1>
        </div>
      </div>
    );
  }
}
