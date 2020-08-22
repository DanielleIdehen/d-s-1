import React, { Component } from 'react';
import '../styles/Base.scss';
import Name from './Name';
import MainGrid from './MainGrid';
import InfoModal from './InfoModal';


class MainPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="reg-page">
        <Name />
        <InfoModal />
        <MainGrid />
      </div>
    )}
}

export default MainPage;