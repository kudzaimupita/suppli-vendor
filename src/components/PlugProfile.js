import React, { PureComponent } from "react";
import { createPlug } from "../actions/plugs";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
import Dropzone from "./Dropezone";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Progress,
  Spinner,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Modal,
  Container,
} from "reactstrap";

class PlugApplication extends React.Component {
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  state = {
    catergory: "",
    name: "",
    companyEmail: "",
    phone: "",
    city: "",
    postalCode: "",
    address: "",
    country: "South Africa",
    aboutUs: "",
    image1: null,
    productImage1: null,
    productImage2: null,
    productImage3: null,
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleCompanyEmailChange = (e) => {
    this.setState({ companyEmail: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };
  handlePostalCodeChange = (e) => {
    this.setState({ postalCode: e.target.value });
  };

  handleAboutUsChange = (e) => {
    this.setState({ aboutUs: e.target.value });
  };

  handleImage1Change = (e) => {
    this.setState({ image1: URL.createObjectURL(e.target.files[0]) });
  };

  handleProductImage1Change = (e) => {
    this.setState({ productImage1: URL.createObjectURL(e.target.files[0]) });
  };

  handleProductImage2Change = (e) => {
    this.setState({ productImage2: URL.createObjectURL(e.target.files[0]) });
  };

  handleProductImage3Change = (e) => {
    this.setState({ productImage3: URL.createObjectURL(e.target.files[0]) });
  };

  handleCatergoryChange = (e) => {
    this.setState({ catergory: e.target.value });
  };
  onSubmit = async (e) => {
    this.props.createPlug(
      {
        catergory: this.state.catergory,
        sampleProductImages: [
          this.state.productImage1,
          this.state.productImage2,
          this.state.productImage3,
        ],
        logo: this.state.image1,
        companyEmail: this.state.companyEmail,
        name: this.state.name,
        phone: this.state.phone,
        aboutUs: this.state.aboutUs,
        plugAddress: {
          city: this.state.city,
          country: this.state.country,
          address: this.state.address,
          postalCode: this.state.postalCode,
        },
      },
      this.props.history
    );
  };

  buttonSpinner = (
    <Spinner
      size="sm"
      style={{ marginRight: 6 }}
      // type="grow"
      color="white"
    />
  );

  render() {
    console.log(this.state.catergory);
    return (
      <>
        <Card className="bg-white shadow" style={{ marginBottom: 20 }}>
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Plug application</h3>
              </Col>
              <Col className="text-right" xs="4">
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Help
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="pl-sm-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                        size="sm"
                      >
                        Plug name*
                      </label>
                      <Input
                        className="form-control"
                        id="input-username"
                        placeholder="eg Nike Holdings"
                        type="text"
                        size="sm"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Plug email*
                      </label>
                      <Input
                        className="form-control"
                        id="input-email"
                        placeholder="eg contact@nikeholdings.com"
                        type="email"
                        size="sm"
                        name="email"
                        value={this.state.companyEmail}
                        onChange={this.handleCompanyEmailChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        Phone*
                      </label>
                      <Input
                        className="form-control"
                        id="input-first-name"
                        placeholder="eg 063 532 9999"
                        type="text"
                        size="sm"
                        name="email"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <span
                        className="avatar avatar-lg rounded-circle"
                        style={{
                          marginRight: 20,
                          buttom: "300px",
                          position: "absolute",
                          left: "50px",
                        }}
                      >
                        <img
                          alt=""
                          src={
                            !this.state.image1
                              ? require("../assets/img/theme/default-logo.png")
                              : this.state.image1
                          }
                        />
                      </span>
                      <Button
                        className="btn-icon mt-2"
                        color="info"
                        type="button"
                        onClick={() => this.fileUpload.click()}
                        size="sm"
                        style={{
                          position: "absolute",
                          // top: "8px",
                          top: "60px",
                        }}
                      >
                        <span className="btn-inner--icon">
                          <i class="fa fa-upload"></i>
                        </span>
                        <span className="btn-inner--text">Upload logo</span>{" "}
                        {this.state.image1 ? (
                          <i class="fa fa-check-circle"></i>
                        ) : (
                          <i class="fa fa-times"></i>
                        )}
                      </Button>
                      <input
                        type="file"
                        ref={(fileUpload) => {
                          this.fileUpload = fileUpload;
                        }}
                        style={{ visibility: "hidden" }}
                        name="image1"
                        onChange={this.handleImage1Change}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <div className="pl-lg-4" style={{ marginTop: 40 }}>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Address
                      </label>
                      <Input
                        className="form-control"
                        id="input-address"
                        placeholder="89 Smitch Avenue, building 4, floor 45"
                        type="text"
                        size="sm"
                        name="address"
                        value={this.state.address.address}
                        onChange={this.handleAddressChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        City
                      </label>
                      <Input
                        className="form-control"
                        id="input-city"
                        placeholder="Cape Town"
                        type="text"
                        size="sm"
                        name="city"
                        value={this.state.address.city}
                        onChange={this.handleCityChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Country
                      </label>
                      <Input
                        className="form-control"
                        defaultValue="South Africa"
                        id="input-country"
                        placeholder="South Africa"
                        type="text"
                        size="sm"
                        disabled
                        name="country"
                        value={this.state.address.country}
                        onChange={this.handleCountryChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Postal code
                      </label>
                      <Input
                        className="form-control"
                        id="input-postal-code"
                        placeholder="eg 2001"
                        type="number"
                        size="sm"
                        name="postalCode"
                        value={this.state.address.postalCode}
                        onChange={this.handlePostalCodeChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="9">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        About us*
                      </label>
                      <Input
                        className="form-control"
                        rows="4"
                        placeholder="eg Nike holding is an NYC based apparel company keeping up with the latest fashion trends, both traditional and modern etc"
                        type="textarea"
                        name="aboutUs"
                        value={this.state.aboutUs}
                        onChange={this.handleAboutUsChange}
                      />
                    </FormGroup>
                  </Col>{" "}
                  <Col md="3">
                    {" "}
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Catergory
                      </label>
                      <UncontrolledDropdown group>
                        <DropdownToggle caret color="secondary">
                          Choose
                        </DropdownToggle>
                        <DropdownMenu>
                          {this.props.catergories.map((catergory) => (
                            <li>
                              <DropdownItem
                                href="#pablo"
                                onClick={this.handleCatergoryChange}
                                name=""
                              >
                                {catergory.name}
                              </DropdownItem>
                            </li>
                          ))}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-2" />

              <div className=" progress-danger">
                <div className=" progress-label">
                  <span>Let's get you started :)</span>
                </div>
                <div className=" progress-percentage">
                  <span></span>
                </div>
              </div>
              <Progress max="100" value="78" color="success"></Progress>
            </Form>
          </CardBody>
        </Card>

        <Card className="bg-white shadow" style={{ marginBottom: 160 }}>
          <label
            className="form-control-label"
            htmlFor="input-address"
            style={{ left: "20px", position: "relative", top: "10px" }}
          >
            Upload images for 3 of any of your products
          </label>
          <hr className="my-2" style={{ marginTop: 30 }} />

          <CardBody>
            <Form>
              <Dropzone />
              <hr className="my-2" style={{ marginTop: 30 }} />

              <Modal
                className="modal-dialog-centered modal-warning"
                // contentClassName="bg-gradient-info"
                isOpen={this.state.notificationModal}
                toggle={() => this.toggleModal("notificationModal")}
              >
                <div className="modal-header">
                  <h6
                    className="modal-title"
                    id="modal-title-notification"
                  ></h6>
                </div>
                <div className="modal-body">
                  <div className="py-3 text-center">
                    <i className="ni ni-bell-55 ni-3x" />
                    <h4 className="heading mt-4">Please stay with us.</h4>
                    <p>
                      Due to high volumes of applications, we usually approve
                      plugs within 3 working days.
                    </p>
                  </div>
                </div>
                <div className="modal-footer">
                  <Button
                    className="btn-white"
                    color="default"
                    type="button"
                    onClick={() => this.onSubmit()}
                  >
                    {this.props.createdPlugLoading ? this.buttonSpinner : null}{" "}
                    Ok, submit
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

              {this.props.auth ? (
                <>
                  <Button
                    className="my-4"
                    color="default"
                    block
                    type="button"
                    onClick={() => this.toggleModal("notificationModal")}
                  >
                    Submit application
                  </Button>
                </>
              ) : (
                <Container style={{ marginBottom: 20 }}>
                  <h5
                    className="mb-2"
                    style={{ textAlign: "center", marginBottom: 20 }}
                  >
                    Register or sign in to proceed
                  </h5>

                  <RegisterModal />
                  <p style={{ textAlign: "center" }}>or</p>
                  <SignInModal />
                </Container>
              )}
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}

PlugApplication.defaultProps = {
  catergories: [],
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  isAuthenticated: state.auth,
  loading: state.auth.loading,
  createdPlugLoading: state.createdPlug.loading,
  catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, { setAlert, createPlug })(
  PlugApplication
);
