import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Base.scss';

import Heading from './Heading';
import EmailIcon from './EmailIcon';
import ScrollIcon from './ScrollIcon';


class CoverPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="reg-page">
          <Heading />
          <Link activeClass="active" to="mainpage" spy={true} smooth={true} offset={0} duration={1000} >
            <ScrollIcon />
          </Link>
          <EmailIcon />
       </div>
    )}
}

export default CoverPage;