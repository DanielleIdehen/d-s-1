import React, { Component} from 'react';
import '../styles/Base.scss';

class Summary extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = ["TBC"];
    return(
      <div className="grid-item">
        <div className="title">Summary</div>
        <p>You've reached the end. I aimed to keep this website short and sweet,
          but yet informative and personal. I hope it made for pleasant reading.
          If you would like to discuss job opportunities or any other things,
          please dont hesistate to contact me via the email icon on the bottom right or search for me on LinkedIn
          (full name is in the top left corner).
        </p>
      </div>
    )
  }
}

export default Summary;