import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";

class AlertModal extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  toggleModal = this.props.showAlert;

  render() {
    console.log(this.props.showAlert);
    return (
      <>
        {/* <Button
          block
          className="mb-3"
          color="warning"
          type="button"
          onClick={() => this.toggleModal("notificationModal")}
        >
          Notification
        </Button> */}
        <Modal
          className="modal-dialog-centered modal-success"
          contentClassName="bg-gradient-success"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification"></h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-3 text-center">
              <i className="ni ni-bell-55 ni-3x" />
              <h4 className="heading mt-4">You should read this!</h4>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <Button className="btn-white" color="default" type="button">
              Ok, Got it
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default AlertModal;
