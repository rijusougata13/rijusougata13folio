import React from 'react';
import PropTypes from 'prop-types';
import { ModalStyle } from './styles';
import { StyledButton } from './styles/index';
import { AiFillCloseCircle } from "react-icons/ai";


class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
     
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      Width: 1000,
      Height: 1300,
      margin: '0 auto',
      padding: 30
    };

    return (
    //   <backdropStyle>
        <ModalStyle>
         

          <div className="footer">
            {/* <StyledButton >
              Close
            </StyledButton> */}
           <AiFillCloseCircle onClick={this.props.onClose} color="black" size="40px" className="close"/>
          </div>
            {this.props.children}
        </ModalStyle>
    //   </backdropStyle>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;