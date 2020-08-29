import React, { Component } from 'react';
import '../styles/Base.scss';
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EmailIcon extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <a href="mailto:danielle.idehen@gmail.com?subject=Portfolio Website
      &body=Hi%20Danielle!%0D%0A%0D%0AI%20have%20seen%20your%20porfolio%20and%20I%20would%20like%20to%20speak%20to%20you%20about%20it.
      %0D%0A
      *Insert your message*
      %0D%0A %0D%0A %0D%0A
      Kind regards,
      ">
        <div class="email-container">
          <div class="email-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
       </div>
      </a>
    )
  }
}

export default EmailIcon;