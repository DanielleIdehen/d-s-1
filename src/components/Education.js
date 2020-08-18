import React, { Component} from 'react';
import '../styles/Base.scss';

class Education extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = ["TBC"];
    return(
      <div className="grid-item">
        <div className="title">Education</div>
        <p style={{fontSize: "1.4rem"}}><strong>University of Manchester</strong></p>
        <p><i>2016-2020</i></p>
        <p>BSc (with Hons) Computer Science with Industrial Experience</p>
        <p>Grade: First Class</p>
        <br></br>
        <p style={{fontSize: "1.4rem"}}><strong>Aquinas College</strong></p>
        <p><i>2014-2016</i></p>
        <p> A-levels: 
          <ul>
            <li>Mathematics (A*)</li>
            <li>Further Mathematics (A)</li>
            <li>Physics (B)</li>
          </ul>
        </p>
      </div>
    )
  }
}

export default Education;