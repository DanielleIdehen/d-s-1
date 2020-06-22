import React, { Component } from 'react';
import '../css/App.css';

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
          <div className="simple-box">
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus sollicitudin risus eu ultricies. Phasellus sagittis aliquam accumsan. Ut vitae accumsan ex. Duis vestibulum non nisi vel luctus. Nullam turpis orci, aliquam vitae eros non, pretium ultricies ex. In congue ipsum in tempor sodales. In hac habitasse platea dictumst. Ut et sem tellus. Aliquam vestibulum, velit at blandit aliquet, sapien leo tincidunt justo, in elementum felis leo et sapien.</p>
          </div>
          <div className="simple-box">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus sollicitudin risus eu ultricies. Phasellus sagittis aliquam accumsan. Ut vitae accumsan ex. Duis vestibulum non nisi vel luctus. Nullam turpis orci, aliquam vitae eros non, pretium ultricies ex. In congue ipsum in tempor sodales. In hac habitasse platea dictumst. Ut et sem tellus. Aliquam vestibulum, velit at blandit aliquet, sapien leo tincidunt justo, in elementum felis leo et sapien.</p>
          </div>
      </div>
    )
  }
}

export default PageTitle;
