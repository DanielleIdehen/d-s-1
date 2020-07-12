import React, { Component } from 'react';
import '../styles/Port.scss';
import Name from './Name';
import MainGrid from './MainGrid';

class MainPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="reg-page">
        <Name />
        <MainGrid />
      </div>
    )}
}

export default MainPage;