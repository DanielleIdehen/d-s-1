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
        <p style={{fontSize: "1.4rem"}}><strong>Accenture</strong></p>
        <p>Job Title: Application Developer</p>
        <p>Achievements:</p>
      </div>
    )
  }
}

export default Experience;