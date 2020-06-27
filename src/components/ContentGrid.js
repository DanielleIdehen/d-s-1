import React, { Component } from 'react';
import '../styles/App.scss';

class ContentGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="content-shapes">
        <div>About Me</div>
        <div>Education</div>
        <div>Current Occupation</div>
        <div>Job History</div>
        <div>Hobbies</div>
        <div>About This Website</div>
        <div>Contact Information</div>
      </div>
    )}
}

export default ContentGrid;