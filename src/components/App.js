import React, { Component } from 'react';
import '../css/App.css';
import NavBar from './NavBar';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <NavBar/>
      </div>
    )}
}

export default App;
