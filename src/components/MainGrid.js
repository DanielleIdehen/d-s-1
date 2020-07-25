import React, { Component} from 'react';
import '../styles/Base.scss';
import GridItem from './GridItem';

class MainGrid extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="grid-container">
        <GridItem 
          title="About Me" 
          points={["Problem Solver", "Team Sports", "Charity"]}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
          ipsum dui pretium enim, non consequat felis quam eu justo. 
          Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
          Praesent vel pulvinar ex, rhoncus elementum mauris. 
          Donec a turpis non est molestie volutpat sed nec turpis. 
          Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis." />
        <GridItem 
          title="Education"
          points= {["University Graduate"]}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
          ipsum dui pretium enim, non consequat felis quam eu justo. 
          Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
          Praesent vel pulvinar ex, rhoncus elementum mauris. 
          Donec a turpis non est molestie volutpat sed nec turpis. 
          Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis." 
          />
        <GridItem title="Projects"
          points= {["Portfolio Website", "Deep Learning for NER"]}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
          ipsum dui pretium enim, non consequat felis quam eu justo. 
          Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
          Praesent vel pulvinar ex, rhoncus elementum mauris. 
          Donec a turpis non est molestie volutpat sed nec turpis. 
          Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis." />
        <GridItem title="Skills"
          points= {["Logical", "Team Player", "Creative", "Honest", "Hardworking"]}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
          ipsum dui pretium enim, non consequat felis quam eu justo. 
          Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
          Praesent vel pulvinar ex, rhoncus elementum mauris. 
          Donec a turpis non est molestie volutpat sed nec turpis. 
          Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis." />
        <GridItem title="Job History"
          points= {["Accenture", "UoM Student Ambassdor", "Waitressing"]}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
          ipsum dui pretium enim, non consequat felis quam eu justo. 
          Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
          Praesent vel pulvinar ex, rhoncus elementum mauris. 
          Donec a turpis non est molestie volutpat sed nec turpis. 
          Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis." />
      </div>
    )}
}

export default MainGrid;