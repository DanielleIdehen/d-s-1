import React, { Component } from 'react';
import '../css/App.css';
import LargeHeader from './LargeHeader';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <LargeHeader/>
      </div>
    )}
}

export default App;
