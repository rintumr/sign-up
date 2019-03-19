import React, { Component} from 'react';
import PropTypes from 'prop-types';

import './modal.css';

class Modal extends Component {
  constructor(props){
    super();
    console.log("Modal",props);
  }
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
      <div className ="modal-header">
          <span className="close" onClick={this.props.onClose}>&times;</span>
      </div>
        <div className="modal-content">
          <p>SignUp {this.props.message}</p>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.string
};

export default Modal;