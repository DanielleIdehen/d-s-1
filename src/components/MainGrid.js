import React, { Component} from 'react';
import '../styles/Port.scss';
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
        points={["Problem Solver", "Creative", "Team player"]}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
        ipsum dui pretium enim, non consequat felis quam eu justo. 
        Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
        Praesent vel pulvinar ex, rhoncus elementum mauris. 
        Donec a turpis non est molestie volutpat sed nec turpis. 
        Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis. 
        Proin non mollis ex, vitae posuere mauris.
         Ut et arcu at nisl dignissim maximus sit amet id nunc. 
         Aenean eu ex viverra, porta nisi sed, porttitor neque. 
         Donec sagittis volutpat neque at molestie. 
         Curabitur luctus, nisl et rutrum blandit, mauris urna sollicitudin libero, et pretium odio augue eget nisl. 
         Suspendisse at gravida arcu. Aenean molestie eu metus eget malesuada." />
      <GridItem 
        title="Education"
        points= {["X", "Y"]}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam ultrices gravida vehicula. In dignissim, erat in tempus ultrices, 
        ipsum dui pretium enim, non consequat felis quam eu justo. 
        Mauris sed metus ut elit auctor elementum sit amet nec arcu. 
        Praesent vel pulvinar ex, rhoncus elementum mauris. 
        Donec a turpis non est molestie volutpat sed nec turpis. 
        Aenean gravida enim eu quam tincidunt, sed eleifend augue facilisis. 
        Proin non mollis ex, vitae posuere mauris.
         Ut et arcu at nisl dignissim maximus sit amet id nunc. 
         Aenean eu ex viverra, porta nisi sed, porttitor neque. 
         Donec sagittis volutpat neque at molestie. 
         Curabitur luctus, nisl et rutrum blandit, mauris urna sollicitudin libero, et pretium odio augue eget nisl. 
         Suspendisse at gravida arcu. Aenean molestie eu metus eget malesuada." />
      <GridItem title="Projects"/>
      <GridItem title="Skills"/>
      <GridItem title="Job History"/> 
    </div>
    )}
}

export default MainGrid;