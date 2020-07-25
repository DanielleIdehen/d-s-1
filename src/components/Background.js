import '../styles/Base.scss';
import React, { Component } from 'react';

class Background extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="large-pink-circle-container">
          <div className="circle"></div>
        </div>
        <div className="large-gold-circle-container">
          <div className="circle"></div>
        </div>
        <div className="right-up-circle-container">
          <div className="circle"></div>
        </div>
        <div className="right-down-circle-container">
          <div className="circle"></div>
        </div>
        <div className="back-circle-container">
          <div className="circle"></div>
        </div>
      </div>
    )}
}

export default Background;