import React, { Component} from 'react';
import '../styles/Base.scss';

class Experience extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = ["TBC"];
    return(
      <div className="grid-item">
        <div className="title">Experience</div>
      </div>
    )
  }
}

export default Experience;