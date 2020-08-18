import React, { Component} from 'react';
import '../styles/Base.scss';
import GridItem from './GridItem';

class AboutMe extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = ["Problem Solver", "Team Sports", "Charity"];
    return(
      <div className="grid-item">
        <div className="title">About Me</div>
        <div className="key-points">{keyPoints? keyPoints.join(" , ") : " " }</div>

      </div>
    )
  }
}

export default AboutMe;