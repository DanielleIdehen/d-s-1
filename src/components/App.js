import React, { Component } from 'react';
import '../styles/App.scss';
import NavBar from './NavBar';
import ContentGrid from './ContentGrid';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <NavBar/>
        <ContentGrid />
      </div>
    )}
}

export default App;
