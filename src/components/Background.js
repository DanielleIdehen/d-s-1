import '../styles/Port.scss';
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
        {/* <div className="huge-gold-circle-container">
          <div className="circle"></div>
        </div> */}
      </div>
    )}
}

export default Background;