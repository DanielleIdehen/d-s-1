import React, { Component } from 'react';
import InfoModal from './InfoModal';
import '../styles/Base.scss';

class Name extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <a href="https://www.linkedin.com/in/danielle-idehen-4755ba172/?originalSubdomain=uk" target="_blank">
      <div class="name-container">
        <p>Danielle Idehen</p>
      </div>
      </a>
    )}
}

export default Name;