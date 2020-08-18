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
        <div className="title">*TBC</div>
        <div className="key-points">{keyPoints? keyPoints.join(" , ") : " " }</div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
          ipsum dui pretium enim, non consequat felis quam eu justo. 
          Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
          Praesent vel pulvinar ex, rhoncus elementum mauris. 
          Donec a turpis non est molestie volutpat sed nec turpis. 
          Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis.</p>
      </div>
    )
  }
}

export default Experience;