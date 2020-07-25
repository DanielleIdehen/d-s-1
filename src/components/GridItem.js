import React, { Component} from 'react';
import '../styles/Base.scss';

class GridItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const keyPoints = this.props.points;
    return(
    <div className="grid-item">
      <div className="title">{this.props.title}</div>
      <div className="key-points">{keyPoints? keyPoints.join(" , ") : " " }</div>
      <p>{this.props.content}</p>
    </div>
    )}
}

export default GridItem;