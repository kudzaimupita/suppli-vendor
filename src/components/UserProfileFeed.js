import React from "react";
import classnames from "classnames";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import {
  createPlug,
  getPlug,
  followPlug,
  unfollowPlug,
} from "../actions/plugs";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { updateMyPassword, updateMe } from "../actions/auth";
import SignInModal from "../components/CardGroup";
import { useHistory, Link } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
// reactstrap components
import {
  Card,
  Media,
  Table,
  Badge,
  CardTitle,
  CardBody,
  NavItem,
  InputGroupAddon,
  NavLink,
  Nav,
  Input,
  FormGroupProps,
  Form,
  FormGroup,
  CardFooter,
  Col,
  Modal,
  InputGroup,
  Row,
  TabContent,
  TabPane,
  Button,
} from "reactstrap";

class Navs extends React.Component {
  state = {
    tabs: 1,
    defaultModal: false,
    image: "",
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
    name: "",
    phone: "",
    city: "",
    postalCode: "",
    address: "",
    country: "South Africa",
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

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handlePasswordConfirmChange = (e) => {
    this.setState({ passwordConfirm: e.target.value });
  };

  handlePasswordCurrentChange = (e) => {
    this.setState({ passwordCurrent: e.target.value });
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  onSubmit = async (e) => {
    this.props.updateMyPassword(
      {
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
        passwordConfirm: this.state.passwordConfirm,
        passwordCurrent: this.state.passwordCurrent,
        // plugAddress: {
        //   city: this.state.city,
        //   country: this.state.country,
        //   address: this.state.address,
        //   postalCode: this.state.postalCode,
        // },
      }
      // this.props.history
    );
  };

  onDetailsSubmit = async (e) => {
    this.props.updateMe(
      {
        name: this.state.name,
        phone: this.state.phone,
        billingAddress: {
          city: this.state.city,
          country: this.state.country,
          address: this.state.address,
          postalCode: this.state.postalCode,
        },
      }
      // this.props.history
    );
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    {
      this.props.myOrders &&
        console.log(this.props.myOrders.map((order) => order.phone));
    }

    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Feed
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-delivery-fast mr-2" />
                Order history ({" "}
                {this.props.myOrders && this.props.myOrders.length})
              </NavLink>
            </NavItem>
            <NavItem disabled>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Refunds
              </NavLink>
            </NavItem>
            <NavItem disabled>
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 4,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Account settings
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <TabContent activeTab={"tabs" + this.state.tabs}>
          <TabPane tabId="tabs1">
            <Card className=" bg-white">
              <CardBody>
                <Form onSubmit={() => console.log("hello")}>
                  <Row>
                    <Col xl="3">
                      {" "}
                      <FormGroup>
                        <Input
                          id="exampleFormControlSelect1"
                          type="select"
                          size="sm"
                        >
                          <option>Sort: Date Newest</option>
                          <option>Sort: Date Oldest</option>
                          <option>Sort: Price Highest</option>
                          <option>Sort: Price Lowest</option>
                          <option>Sort: Most Rated</option>
                        </Input>
                      </FormGroup>
                    </Col>{" "}
                    <Col xl="9">
                      {" "}
                      <InputGroup>
                        <Input placeholder="Search for anything" size="sm" />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="button" size="sm">
                            <i class="fa fa-search mr-2" /> Search
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>{" "}
                </Form>
              </CardBody>
            </Card>
            <Row
              style={{
                justifyContent: "center",
                maxHeight: "800px",
                border: "8px",
                display: "flex",
                overflowX: "scroll",

                flexDirection: "row",
              }}
            >
              {" "}
              {this.props.userFeed.products ? (
                this.props.userFeed.products.map((product) => (
                  <Col
                    md="4"
                    xs="6"
                    sm="4"
                    xl="3"
                    style={{ marginTop: 20 }}
                    className='mb-5 mb-xl-0" xl="8'
                  >
                    <ProductCard product={product} />
                  </Col>
                ))
              ) : (
                <Spinner />
              )}
            </Row>{" "}
          </TabPane>
          <TabPane tabId="tabs2">
            <Card className="bg-default shadow">
              <Table className="align-items-center table-dark" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Overview</th>
                    <th scope="col">Order date</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Shipping to</th>{" "}
                    <th scope="col">Order Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Customer email</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {this.props.myOrders &&
                    this.props.user &&
                    this.props.myOrders.map((order) => (
                      <tr>
                        <td>
                          {" "}
                          <Button
                            className=" btn-icon"
                            color="primary"
                            size="sm"
                            type="button"
                            style={{ marginRight: "5px" }}
                            onClick={() => this.toggleModal("formModal")}
                          >
                            <i class="fa fa-eye"></i>
                          </Button>
                          <Modal
                            className="modal-dialog-centered"
                            size="sm"
                            isOpen={this.state.formModal}
                            toggle={() => this.toggleModal("formModal")}
                          >
                            <div className="modal-body p-0">
                              <Card className="bg-default shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                  <div className="text-center text-muted mb-4">
                                    {order.products.length}
                                  </div>
                                </CardBody>
                              </Card>
                            </div>
                          </Modal>
                        </td>
                        <td>{order.createdOn.slice(0, 10)}</td>{" "}
                        <td>
                          <Badge color="" className="badge-dot m2-4 ">
                            {order.status == "processing" ? (
                              <i className="bg-danger" />
                            ) : null}
                            {order.status == "fullfilled" ? (
                              <i className="bg-success" />
                            ) : null}
                            {order.status == "enroute" ? (
                              <i className="bg-warning" />
                            ) : null}
                            {order.status == "cancelled" ? (
                              <i className="bg-danger" />
                            ) : null}
                          </Badge>
                          {order.status}
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2"></span>
                            {order.paymentStatus}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2"></span>

                            {order.shippingAddress.city}
                          </div>
                        </td>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">{order._id}</span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2"></span>
                            {order.user.name}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {order.user.email}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card>
          </TabPane>
          <TabPane tabId="tabs3">
            <p className="description">
              Raw denim you probably haven't heard of them jean shorts Austin.
              Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              Mustache cliche tempor, williamsburg carles vegan helvetica.
              Reprehenderit butcher retro keffiyeh dreamcatcher synth.
            </p>
          </TabPane>
          <TabPane tabId="tabs4">
            {" "}
            <Row>
              <Col xl="8">
                {" "}
                <Card>
                  <CardBody>
                    {" "}
                    <Form>
                      <Row>
                        {" "}
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Name<span className="text-danger"> *</span>
                            </label>
                            <Input
                              className="form-control"
                              id="input-address"
                              placeholder="phone"
                              type="text"
                              name="name"
                              defaultValue={
                                this.props.user && this.props.user.name
                              }
                              // value={this.state.name}
                              onChange={this.handleNameChange}
                            />
                          </FormGroup>{" "}
                        </Col>{" "}
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Phone<span className="text-danger"> *</span>
                            </label>
                            <Input
                              className="form-control"
                              id="input-address"
                              placeholder="phone"
                              type="text"
                              name="phone"
                              // value={this.state.phone}
                              onChange={this.handlePhoneChange}
                            />
                          </FormGroup>{" "}
                        </Col>{" "}
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              City<span className="text-danger"> *</span>
                            </label>
                            <Input
                              className="form-control"
                              id="input-city"
                              placeholder="City"
                              type="text"
                              name="city"
                              // value={this.state.city}
                              onChange={this.handleCityChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <SignInModal />
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Physical address
                              <span className="text-danger"> *</span>
                            </label>
                            <Input
                              className="form-contro"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                              name="address"
                              // value={this.state.address}
                              onChange={this.handleAddressChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row style={{ paddingTop: "0px" }}>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Postal code<span className="text-danger"> *</span>
                            </label>
                            <Input
                              aria-label
                              className="form-control"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                              name="postalCode"
                              // value={this.state.postalCode}
                              onChange={this.handlePostalCodeChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Country<span className="text-danger"> *</span>
                            </label>
                            <Input
                              className="form-control"
                              id="input-country"
                              placeholder="South Africa"
                              type="text"
                              disabled
                              name="country"
                              //   value={country}
                              //   onChange={onChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <Button
                      block
                      color="primary"
                      size="sm"
                      onClick={() => this.onDetailsSubmit()}
                    >
                      Save
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4">
                {" "}
                <Card>
                  <CardBody>
                    {" "}
                    <Form>
                      <Row>
                        {" "}
                        <Col md="12">
                          <FormGroup>
                            {/* <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Current password
                              <span className="text-danger"> *</span>
                            </label> */}
                            <Input
                              className="form-control"
                              id="input-address"
                              placeholder="current password"
                              type="password"
                              name="passwordCurrent"
                              //   value={phone}
                              onChange={this.handlePasswordCurrentChange}
                            />
                          </FormGroup>{" "}
                        </Col>{" "}
                        <Col md="12">
                          <FormGroup>
                            {/* <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              New password
                              <span className="text-danger"> *</span>
                            </label> */}
                            <Input
                              className="form-control"
                              id="input-address"
                              placeholder=" new password"
                              type="password"
                              name="password"
                              //   value={phone}
                              onChange={this.handlePasswordChange}
                            />
                          </FormGroup>{" "}
                        </Col>{" "}
                        <Col lg="12">
                          <FormGroup>
                            {/* <label
                              className="labels"
                              htmlFor="input-country"
                              style={{ fontSize: "13px" }}
                            >
                              Confirm new password
                              <span className="text-danger"> *</span>
                            </label> */}
                            <Input
                              className="form-control"
                              id="input-city"
                              placeholder="confirm password"
                              type="password"
                              name="passwordConfirm"
                              //   value={city}
                              onChange={this.handlePasswordConfirmChange}
                            />
                          </FormGroup>{" "}
                        </Col>
                      </Row>{" "}
                      <Button
                        block
                        color="info"
                        size="sm"
                        onClick={() => this.onSubmit()}
                      >
                        Update password
                      </Button>
                    </Form>
                  </CardBody>
                </Card>{" "}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </>
    );
  }
}

Navs.defaultProps = {
  catergories: [],
  product: {},
  plug: {},
  myOrders: [],
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  product: state.product.product,
  auth: state.auth.isAuthenticated,
  isAuthenticated: state.auth,
  plug: state.plug.plug,
  loading: state.auth.loading,
  createdPlugLoading: state.createdPlug.loading,
  catergories: state.catergories.catergories,
  myOrders: state.myOrders.orders,
  userFeed: state.userFeed,
});

export default connect(mapStateToProps, {
  followPlug,
  updateMyPassword,
  unfollowPlug,
  setAlert,
  createPlug,
  getPlug,
  updateMe,
})(Navs);
