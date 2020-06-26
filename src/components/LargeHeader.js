import React, { Component } from 'react';
import '../css/App.css';
import PageTitle from './PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class LargeHeader extends Component{
  constructor(props){
    super();
  }
  render() {
    return(
    <div class="grid-container">
      <div><FontAwesomeIcon icon={faBars} /></div>
      <div><PageTitle/></div>
      <div></div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pellentesque sem. Integer tortor magna.</div>
    </div>
  )}
}

export default LargeHeader;