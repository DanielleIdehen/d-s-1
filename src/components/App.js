import React, { Component } from 'react';
import PageTitle from './PageTitle';
import '../css/App.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <PageTitle />
      </div>
    )}
}

export default App;
