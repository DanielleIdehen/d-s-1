import React, { Component } from 'react';
import '../styles/App.scss';

class ContentGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="content-shapes">
        <div class="content1">About Me</div>
        <div class="content2">Education</div>
        <div class="content3">Current Occupation</div>
        <div class="content4">Job History</div>
        <div class="content5">Hobbies</div>
        <div class="content6">About This Website</div>
        <div class="content7">Contact Information</div>
      </div>
    )}
}

export default ContentGrid;