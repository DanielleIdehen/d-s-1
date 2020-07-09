import React, { Component} from 'react';
import '../styles/Port.scss';

class Heading extends Component{
  constructor(props){
    super(props);
    this.state = {
      'title': 'Hi, I\'m Danielle. \nA full stack \n Software Engineer.'
    }
  }
  render(){
    return(
      <div>
        <p>{this.state.title}</p>
      </div>
    )
  }
}

export default Heading;