import React, { Component } from 'react';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component{
  constructor(props){
    super();
    this.state = {
      title: 'Danielle Idehen'
    }
  }
  render() {
    return(
    <div class="nav-bar">
    </div>
  )}
}

export default NavBar;