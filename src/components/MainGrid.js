import React, { Component} from 'react';
import '../styles/Base.scss';
import GridItem from './GridItem';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';


class MainGrid extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="grid-container">
        <AboutMe />
        <Education />
        <Projects />
        <Experience />     
      </div>  
    )}
}

export default MainGrid;