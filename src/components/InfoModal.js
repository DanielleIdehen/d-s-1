import React, { Component } from 'react';
import '../styles/Base.scss';

class InfoModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: true
    };
    this.closeModal = this.closeModal.bind(this);
  }
  

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render(){
    const showModal = this.state.showModal;
    return(
      <div>    
        { showModal  && 
          <div className='info-modal'> 
            <p>Hello! My Name is Danielle. Thank you for visiting this site.
              <br></br>This is a portfolio website which I created to showcase some of what I can do. 
              If you have any comments or questions please contact me via the email icon in the bottom right corner. 
              <br></br>Failing that, I'm an active linkedIn member, so feel free to connect with me at anytime.</p>
            <button type="button" onClick={this.closeModal}>x</button>
          </div>  
          }
      </div>
    )
  }
}

export default InfoModal;