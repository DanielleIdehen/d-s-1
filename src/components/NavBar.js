import React, { Component } from 'react';
import '../styles/App.scss';
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
      <div class="nav-bar-item"><FontAwesomeIcon icon={faBars} /></div>
      <div class="nav-bar-item">{this.state.title}</div>
    </div>
  )}
}

export default NavBar;