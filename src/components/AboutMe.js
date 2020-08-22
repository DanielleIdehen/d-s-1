import React, { Component} from 'react';
import '../styles/Base.scss';

class AboutMe extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = ["Problem Solver", "Team Sports", "Charity"];
    return(
      <div className="grid-item">
        <div className="title">About Me</div>
        <p>
          So who I am? That's a hard question to answer.
          If I consider myself as the sum my achievements I can say with certainty that I am a competent computer scientist (First Class degree - Univeristy of Manchester).
          I held an AWS cloud certification for mulitple years, so have vast experience 'in the cloud'.
          <br></br>But more than that, I am a fun loving and passionate mixed race woman.
          I've played competitive team sports from a young age, netball became my favourite of those sport which I continued to play throughout univeristy.
          I especially enjoy being creative in the kitchen, I use my creations as fuel for my workouts.
          In my spare time I often think of ideas and bring them to flurision, hence the creation of this website and the other projects I have done to date.
        </p>
        <br></br>
        <p>
          As you can imagine, there is more to me than food, sports and code. So please get in touch if you want to know more
          (via the email icon on the bottom right).
        </p>
      </div>
    )
  }
}

export default AboutMe;