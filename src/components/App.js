import React, { Component } from 'react';
import '../styles/App.scss';
import Heading from './Heading';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Heading />
      </div> 
    )}
}

export default App;
