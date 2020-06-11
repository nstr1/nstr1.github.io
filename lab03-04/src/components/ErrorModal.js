import React from "react";
import {Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

class ErrorModal extends React.Component{

    render(){
        return(
        <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
            <Modal.Title>Oops...</Modal.Title>
            </Modal.Header>
            <Modal.Body><Link to="/login">Log in</Link> or <Link to="/registration">Sign up</Link> for this action</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
                OK
            </Button>
            </Modal.Footer>
        </Modal>
        );
    }

}

export default ErrorModal;