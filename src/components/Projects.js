import React, { Component} from 'react';
import '../styles/Base.scss';

class Projects extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = ["TBC"];
    return(
      <div className="grid-item">
        <div className="title">Projects</div>
        <p>Below is a list of some of my favourite projects:</p>
        <br></br>
        <p><strong>Text mining adverse drug reactions from medical case reports</strong></p>
        <p>Built, trained and tested two deep learning models (Bi-LSTM and the BiLSTM-CRF models)
          to extract named entities from raw data.
          Created a UI to view the results of the text mining.
        </p>
        <br></br>
        <p><strong>Portfolio Website</strong></p>
        <p>Created this website using React JS.
        </p>
      </div>
    )
  }
}

export default Projects;