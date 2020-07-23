import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Port.scss';

import Heading from './Heading';
import EmailIcon from './EmailIcon';
import ScrollIcon from './ScrollIcon';
import Background from './Background';


class CoverPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="reg-page">
          {/* <Background /> */}
          <Heading />
          <Link activeClass="active" to="mainpage" spy={true} smooth={true} offset={0} duration={1000} >
            <ScrollIcon />
          </Link>
          <EmailIcon />
       </div>
    )}
}

export default CoverPage;