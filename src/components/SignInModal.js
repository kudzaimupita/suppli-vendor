import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";

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
  Spinner,
} from "reactstrap";

class SignInModal extends React.Component {
  state = {
    password: "",
    email: "",
  };
  buttonSpinner = (
    <Spinner
      size="sm"
      style={{ marginRight: 6 }}
      // type="grow"
      color="white"
    />
  );
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  formData = {
    email: this.state.email,
    password: this.state.password,
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  onSubmit = async (e) => {
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
    console.log(this.formData);
  };
  render() {
    return (
      <>
        <Button
          id="checkout-button"
          block
          outline
          color="info"
          size="md"
          role="link"
          onClick={() => this.toggleModal("formModal")}
        >
          Sign in
        </Button>
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={this.state.formModal}
          toggle={() => this.toggleModal("formModal")}
          style={{ zIndex: 9999 }}
        >
          <div className="modal-body p-0">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-icon mt-2 mb-2"
                    color="neutral"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={require("../assets/img/icons/common/facebook.png")}
                      />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                    className="btn-icon mt-2 mb-2 ml-1"
                    color="neutral"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={require("../assets/img/icons/common/google.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.passwordFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onFocus={(e) =>
                          this.setState({ passwordFocused: true })
                        }
                        onBlur={(e) =>
                          this.setState({ passwordFocused: false })
                        }
                        required
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={() => this.onSubmit()}
                    >
                      {this.props.loading ? this.buttonSpinner : null} Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { setAlert, login })(SignInModal);
