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
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    )
  }
}

export default EmailIcon;