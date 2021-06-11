import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
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
  ButtonGroup,
  Table,
  Container,
  CardTitle,
} from "reactstrap";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../selectors/cartSelector";
import MainNavbar from "../components/MainNavbar";
import CheckoutShippingDetails from "../components/CheckoutShippingDetails";

import SignInModal from "../components/SignInModal";
import CheckoutInfoCards from "../components/checkoutInfoCards";
import { connect } from "react-redux";
import RegisterModal from "../components/RegisterModal";
import {
  clearItemFromCart,
  clearCart,
  addItem,
  removeItem,
} from "../actions/cart";

class Profile extends React.Component {
  render() {
    return (
      <>
        <MainNavbar />{" "}
        <div
          className="position-relative"
          // style={{
          //   backgroundImage: `url(${require("../assets/img/brand/background1.png")})`,
          // }}
        >
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>

            <div className="col px-0">
              <Row style={{ margin: 30, marginBottom: 20 }}>
                <Col xl="8" xs="12">
                  {" "}
                  <Row
                    className="align-items-center justify-content-center"
                    style={{ marginBottom: "30px" }}
                  >
                    <Col className="text-center" lg="6">
                      <h1 className=" text-black-muted">Checkout</h1>
                    </Col>
                  </Row>{" "}
                  <Card className="bg-white shadow">
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h2 className="mb-0">SHOPPING CART</h2>
                        </Col>
                        <Col className="text-right" xs="4">
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            onClick={() => this.props.clearCart()}
                          >
                            Clear cart
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Table className=" table-shopping" responsive>
                        <thead>
                          <tr className="thead-light">
                            <th className=" text-center"></th>
                            <th>Product</th>
                            {/* <th className=" th-description">Color</th> */}
                            {/* <th className=" th-description">Size</th> */}
                            <th className=" text-right">Price</th>
                            <th className=" text-right">Qty</th>
                            <th className=" text-right">Amount</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.cart.cartItems
                            ? this.props.cart.cartItems.map((product) => (
                                <tr>
                                  <td>
                                    <span className="avatar avatar-lg rounded-circle">
                                      <img
                                        alt="..."
                                        src={require("../assets/img/brand/gucci.jpg")}
                                      />
                                    </span>
                                  </td>
                                  <td className=" td-name">
                                    <Link to={`/product/${product._id}`}>
                                      {" "}
                                      <a href="#pablo">{product.name}</a>
                                    </Link>

                                    <br></br>
                                    <Link
                                      to={`/plug/${
                                        product.plug && product.plug._id
                                      }`}
                                    >
                                      {" "}
                                      <small className="text-black">
                                        By {product.plug.name}
                                      </small>
                                    </Link>
                                  </td>
                                  {/* <td>{product.color}</td> */}
                                  {/* <td>{product.size}</td> */}
                                  <td className=" td-number">
                                    <small>R</small>
                                    {product.price}
                                  </td>
                                  <td className=" td-number">
                                    {product.quantity}
                                    {"  "}
                                    <ButtonGroup>
                                      <Button
                                        color="info"
                                        size="sm"
                                        onClick={() =>
                                          this.props.removeItem(product)
                                        }
                                      >
                                        <i className=" ni ni-fat-delete"></i>
                                      </Button>
                                      <Button
                                        color="info"
                                        size="sm"
                                        onClick={() =>
                                          this.props.addItem(product)
                                        }
                                      >
                                        <i className=" ni ni-fat-add"></i>
                                      </Button>
                                    </ButtonGroup>
                                  </td>
                                  <td className=" td-number">
                                    <small>R</small>
                                    {product.quantity * product.price}
                                  </td>
                                  <td className=" td-actions">
                                    <Button
                                      className=" btn-icon btn-simple"
                                      color="danger"
                                      type="button"
                                      size="sm"
                                      onClick={() =>
                                        this.props.clearItemFromCart(product)
                                      }
                                    >
                                      <i class="fa fa-trash"></i>
                                    </Button>
                                  </td>
                                </tr>
                              ))
                            : null}
                          <tr>
                            <td>
                              <span className="avatar avatar-lg rounded-circle">
                                <img
                                  alt="..."
                                  src={require("../assets/img/brand/delivery.png")}
                                />
                              </span>
                            </td>
                            <td className=" td-name">
                              {" "}
                              <a href="#pablo">Delivery fee</a>
                            </td>
                            {/* <td>{product.color}</td> */}
                            {/* <td>{product.size}</td> */}
                            <td className=" td-number">
                              <small>R</small> 79
                            </td>
                            <td className=" td-number">{"  "}</td>
                            <td className=" td-number"></td>
                            <td className=" td-actions"></td>
                          </tr>

                          <tr>
                            <td>
                              <Row>
                                <div className="col">
                                  <span className="h2 text-muted mb-0">
                                    Total: R {this.props.cartTotalPrice}{" "}
                                    <br></br>
                                    <p className="mt-3 mb-0 text-sm">
                                      <span className="text-danger mr-2">
                                        {"  "}
                                        Saved{" "}
                                        <strong>
                                          {" "}
                                          <i class="fa fa-tags"></i>R{" "}
                                          {this.props.cartTotalPrice}
                                        </strong>
                                      </span>
                                      <span className="text-nowrap"></span>
                                    </p>
                                  </span>
                                  <span className="h2 font-weight-bold mb-0"></span>
                                </div>
                              </Row>
                            </td>
                            <td className=" td-name">
                              {" "}
                              <br></br>
                            </td>
                            {/* <td>{product.color}</td> */}
                            {/* <td>{product.size}</td> */}
                            <td className=" td-number"></td>
                            <td className=" td-number">{"  "}</td>
                            <td className=" td-number">
                              {" "}
                              <small>R</small> 79
                            </td>
                            <td className=" td-actions"></td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  <Card className="shadow ">
                    {/* <CardHeader className="border-0 bg-secondary">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="uppercase">BILLING DETAILS</h2>
                  </div>
                  <div className="col text-right">
             
                  </div>
                </Row>
              </CardHeader> */}
                    <Row className="align-items-center">
                      <div className="col" style={{ marginLeft: "20" }}>
                        <h2 className="uppercase">Billing details</h2>
                      </div>
                      <div className="col text-right"></div>
                    </Row>

                    {this.props.auth ? (
                      <>
                        <CheckoutShippingDetails />
                      </>
                    ) : (
                      <Container style={{ marginBottom: 20 }}>
                        <h5 className="mb-0" style={{ textAlign: "center" }}>
                          Register or sign in to proceed
                        </h5>
                        <hr></hr>
                        <RegisterModal />
                        <p style={{ textAlign: "center" }}>or</p>
                        <SignInModal />
                      </Container>
                    )}
                  </Card>
                </Col>
              </Row>
            </div>

            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
          </section>
        </div>
        <Container fluid> </Container>
        <CheckoutInfoCards />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cartTotalPrice: selectCartTotal(state),
  cart: state.cart,
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
})(Profile);
