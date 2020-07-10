import React, { Component } from 'react';
import '../styles/App.scss';
import Heading from './Heading';
import EmailIcon from './EmailIcon';
import Name from './Name';
import Scroll from './Scroll';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Heading />
        <EmailIcon />
        <Scroll />
      </div> 
    )}
}

export default App;
