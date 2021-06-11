/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  Badge,
  Spinner,
  Progress,
  Card,
  Table,
  NavbarBrand,
  CardHeader,
} from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { getCatergories } from "../actions/catergories";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../selectors/cartSelector";
import {
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
} from "../actions/cart";
import CartIcon from "./CartIcon";
import NavUserDropdown from "./NavUserDropdown";
import NavAuthDropdown from "./NavAuthDropdown";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    this.props.getCatergories();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  buttonSpinner = (
    <Spinner
      size="sm"
      style={{ marginRight: 6 }}
      // type="grow"
      color="white"
    />
  );
  authenticatedLinks = (
    <NavItem style={{ marginLeft: 15, marginRight: 40 }} size="sm">
      <NavUserDropdown user={this.props.auth.user} />
    </NavItem>
  );

  notAuthenticatedLinks = (
    <>
      <NavItem>
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav>
            <Button
              ml-lg-auto
              color="slack"
              type="button"
              size="sm"
              style={{ marginLeft: 10, marginRight: 40 }}
            >
              Sign in/Register
            </Button>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem className="noti-title" header tag="div">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </DropdownItem>
            <Link to="/login">
              <DropdownItem>
                <i className="ni ni-single-02" />
                <span>Sign in</span>
              </DropdownItem>
            </Link>

            <DropdownItem divider />
            <Link to="/signup">
              {" "}
              <DropdownItem href="#pablo">
                <i className="ni ni-user-run" />

                <span>Register</span>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    </>
  );

  render() {
    return (
      <>
        <header className="header-global" style={{ padding: 0 }}>
          <Navbar
            className="navbar-horizontal navbar-dark bg-default headroom"
            expand="lg"
            id="navbar-main"
            style={{ height: "80px", paddingTop: 0, paddingBottom: "0px" }}
          >
            <Link to="/">
              <NavbarBrand
                className="mr-lg-5"
                to="/"
                tag={Link}
                style={{ marginLeft: 30 }}
              >
                <img
                  alt="..."
                  src={require("../assets/img/brand/plugs-logo.png")}
                />
                {"  "} <i class="ni ni-shop"></i>
              </NavbarBrand>{" "}
            </Link>

            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={this.state.collapseClasses}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  {/* <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("../assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col> */}
                  <Col className="collapse-close" xs="12">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav
                className="navbar-nav-hover align-items-lg-center"
                navbar
                style={{ marginLeft: 0 }}
              >
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Help</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-spaceship" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Getting started
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn how to use Argon compiling Scss, change brand
                            colors and more.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Foundation
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn more about colors, typography, icons and the
                            grid system we used for Argon.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-ui-04" />
                        </div>
                        <Media body className="ml-3">
                          <h5 className="heading text-warning mb-md-1">
                            Components
                          </h5>
                          <p className="description d-none d-md-inline-block mb-0">
                            Browse our 50 beautiful handcrafted components
                            offered in the Free version.
                          </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <span>
                  <hr style={{ marginTop: 15, marginBottom: 15 }}></hr>
                </span>
                <span className="nav-link-inner--text">Help</span>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  {" "}
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="default"
                      id="navbarDropdownMenuLink2"
                      size="sm"
                    >
                      <i class="fas fa-store"></i>
                      Shop by catergory
                    </DropdownToggle>

                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink2">
                      {this.props.catergories.map((catergory) => (
                        <li>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            {/* <img
                            alt="..."
                            src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/DE.png"
                          ></img> */}
                            {catergory.name}
                          </DropdownItem>
                        </li>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <span>
                  <hr style={{ marginTop: 15, marginBottom: 15 }}></hr>
                </span>
                <NavItem style={{ width: "30rem" }}>
                  <Form onSubmit={() => console.log("hello")}>
                    <InputGroup>
                      {" "}
                      <Input placeholder="    Search for anything" size="sm" />
                      <InputGroupAddon addonType="append">
                        <Button color="primary" type="button" size="sm">
                          <i class="fa fa-search mr-2" /> Search
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </NavItem>
                <span>
                  <hr style={{ marginTop: 15, marginBottom: 15 }}></hr>
                </span>
                <NavItem className=" d-lg-block ml-lg-4">
                  {this.props.isAuthenticated.isAuthenticated &&
                  this.props.myPlug.plug ? (
                    <Link to="/dashboard">
                      {" "}
                      <Button color="primary" type="button" size="sm">
                        <span className="btn-inner--icon">
                          <i class="fa fa-user text-info"></i>
                        </span>
                        <span className="nav-link-inner--text ml-1">
                          {/* {this.props.myPlug.loading
                            ? this.buttonSpinner
                            : null}{" "} */}
                          Dashboard
                        </span>
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/create-plug">
                      <Button color="slack" type="button" size="sm">
                        <span className="btn-inner--icon">
                          <i class="fa fa-user"></i>
                        </span>
                        <span className="nav-link-inner--text ml-1">
                          Create plug
                        </span>
                      </Button>{" "}
                    </Link>
                  )}
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle className="pr-0 " nav>
                      <Button color="primary" outline type="button" size="sm">
                        <CartIcon cart={this.props.cart} />
                      </Button>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <Card className="shadow">
                        <CardHeader className="border-0">
                          <Row className="align-items-center">
                            <div className="col">
                              <h3 className="mb-0">Cart overview</h3>
                            </div>
                            <div className="col text-right">
                              <Button
                                color="danger"
                                href="#pablo"
                                onClick={() => this.props.clearCart()}
                                size="sm"
                              >
                                Clear cart
                              </Button>
                            </div>
                          </Row>
                        </CardHeader>
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Price/Quantity</th>
                              <th scope="col" Action />
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.cartItems.map((product) => (
                              <tr>
                                <th scope="row">{product.name}</th>
                                <td>
                                  <strong>R</strong> {product.price} *{" "}
                                  {product.quantity}
                                </td>
                                <td>
                                  <Button
                                    className=" btn-icon"
                                    color="info"
                                    size="sm"
                                    type="button"
                                    onClick={() =>
                                      this.props.removeItem(product)
                                    }
                                  >
                                    <i class="fa fa-minus"></i>
                                  </Button>

                                  <Button
                                    className=" btn-icon"
                                    color="success"
                                    size="sm"
                                    type="button"
                                    onClick={() => this.props.addItem(product)}
                                  >
                                    <i class="fa fa-plus"></i>
                                  </Button>

                                  <Button
                                    className=" btn-icon"
                                    color="danger"
                                    size="sm"
                                    type="button"
                                    onClick={() =>
                                      this.props.clearItemFromCart(product)
                                    }
                                  >
                                    <i class="fa fa-trash"></i>
                                  </Button>
                                </td>
                              </tr>
                            ))}

                            <tr>
                              <th scope="row">Subtotal</th>
                              <td>
                                {" "}
                                <strong>R {this.props.cartTotalPrice}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        <Row>
                          <Col style={{ margin: 20 }}>
                            <Link to="/checkout">
                              {" "}
                              <Button block color="primary" size="md">
                                Proceed to checkout
                              </Button>
                            </Link>
                          </Col>
                        </Row>
                      </Card>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <span>
                  <hr style={{ marginTop: 15, marginBottom: 15 }}></hr>
                </span>

                {this.props.isAuthenticated.isAuthenticated
                  ? this.authenticatedLinks
                  : this.notAuthenticatedLinks}
              </Nav>
            </UncontrolledCollapse>
          </Navbar>
        </header>
      </>
    );
  }
}

DemoNavbar.defaultProps = {
  catergories: [],
  myPlug: {},
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: selectCartItemsCount(state),
  cartTotalPrice: selectCartTotal(state),
  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug,
  catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {
  logout,
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
  getCatergories,
})(DemoNavbar);
