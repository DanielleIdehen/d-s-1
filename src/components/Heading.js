import React, { Component} from 'react';
import '../styles/Port.scss';

class Heading extends Component{
  constructor(props){
    super(props);
    this.state = {
      'title': 'Hi, I\'m Danielle.\nA full stack\nSoftware Engineer.'
    }
  }
  render(){
    return(
      <div class="heading-container">
        <div class="main-heading">
          {this.state.title}
        </div>
      </div>
    )
  }
}

export default Heading;