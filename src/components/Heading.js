import React, { Component} from 'react';
import '../styles/Base.scss';

class Heading extends Component{
  constructor(props){
    super(props);
    this.state = {
      'title': 'Hi, I\'m Danielle.',
      'title2': 'A full stack',
      'title3': 'Software Engineer.'
    }
  }
  render(){
    return(
      <div className="heading-container">
        <div className="main-heading">
          <div className="line1">{this.state.title}</div>
          <div className="line2">{this.state.title2}</div>
          <div className="line3">{this.state.title3}</div>
        </div>
      </div>
    )
  }
}

export default Heading;