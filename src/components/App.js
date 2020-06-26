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
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pellentesque sem. Integer tortor magna.</div>
      </div>
    )}
}

export default App;
