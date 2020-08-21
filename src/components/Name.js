import React, { Component } from 'react';
import InfoModal from './InfoModal';
import '../styles/Base.scss';

class Name extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div class="name-container">
        <p>Danielle Idehen</p>
        <InfoModal />
      </div>
    )}
}

export default Name;