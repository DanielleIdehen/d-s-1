import React, { Component } from 'react';
import '../styles/App.scss';
import Heading from './Heading';
import EmailIcon from './EmailIcon';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Heading />
        <EmailIcon />
      </div> 
    )}
}

export default App;
