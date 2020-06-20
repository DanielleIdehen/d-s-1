import React, { Component } from 'react';

class PageTitle extends Component {
  constructor(props){
    super(props);
    this.state ={
    text: 'Design system'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default PageTitle;
