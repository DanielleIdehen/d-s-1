import React, { Component } from 'react';
import '../styles/Port.scss';

import CoverPage from './CoverPage';
import MainPage from './MainPage';
import BottomPage from './BottomPage';
import Background from './Background';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div id="coverpage"><CoverPage/></div>
        <div id="mainpage"><MainPage/></div>
      </div> 
    )}
}

export default App;
