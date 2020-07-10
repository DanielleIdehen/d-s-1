import React, { Component } from 'react';
import '../styles/App.scss';
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EmailIcon extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="email-container">
        <div class="email-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    )
  }
}

export default EmailIcon;