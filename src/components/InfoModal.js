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
            <p>Hello World!</p>
            <button type="button" onClick={this.closeModal}>Close</button>
          </div>  
          }
      </div>
    )
  }
}

export default InfoModal;