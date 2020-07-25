import React, { Component } from 'react';
import '../styles/Base.scss';
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Scroll extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div class="scroll-container">
          <div class="scroll-icon">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
       </div>
    )}
}

export default Scroll;