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
        <p><i>Aug 2018 - Aug 2019</i></p>
        <p>Job Title: Application Developer</p>
        <p>Achievements:</p>
        <p><ul>
          <li>Built a chatbot to increase productivity for a large telecomunication company.
            <br></br> Integrated this system with legacy code.
            <br></br> This solution involved using AWS, HTML, Perl, JS.
          <li>Designed and presented complex technical solutions to a wide range of experts (both technical and non-technical)</li>
          <li>Coded in a variety of languages, inluding React and Node.js.</li>
          </li>
          <li>Leader of the Health and Wellbeing committee for Accenture employees in one of the London offices.
            <br></br>Our most notable action was organise a charity ping-pong competition which raised over £100 for support iliteracy in young females.
          <li>Member of the Accenture Netball team.</li>
          </li>
        </ul></p>
      </div>
    )
  }
}

export default Experience;