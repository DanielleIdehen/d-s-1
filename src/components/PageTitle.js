import React, { Component } from 'react';
import '../css/App.css';

class PageTitle extends Component {
  constructor(props){
    super(props);
    this.state ={
    text: 'DANIELLE IDEHEN'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )}
}

export default PageTitle;
