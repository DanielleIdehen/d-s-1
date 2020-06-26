import React, { Component } from 'react';
import '../css/App.css';
import PageTitle from './PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component{
  constructor(props){
    super();
  }
  render() {
    return(
    <div class="nav-bar-grid">
      <ul>
        <li><FontAwesomeIcon icon={faBars} /></li>
        <li><PageTitle/></li>
      </ul>
    </div>
  )}
}

export default NavBar;