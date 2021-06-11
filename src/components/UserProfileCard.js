import React from "react";
import { getMyOrders } from "../actions/orders";
import {
  createPlug,
  getPlug,
  followPlug,
  unfollowPlug,
} from "../actions/plugs";
import classNames from "classnames";

import {
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
} from "../actions/cart";
import {
  createProduct,
  getProduct,
  updateProduct,
  addToWishlist,
  removeFromWishlist,
} from "../actions/products";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, Link } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  FormGroupProps,
  Form,
  FormGroup,
  CardFooter,
  CardImg,
  ButtonGroup,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "reactstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <Card className="card-profile" style={{ marginBottom: "30px" }}>
          <CardImg
            alt="..."
            src={require("../assets/img/brand/rsz_background1.png")}
            top
            style={{ height: "120px" }}
          />
          <CardImgOverlay
            className="d-flex align-items-center"
            style={{ paddingBottom: "160px", paddingLeft: "120px" }}
          >
            <div>
              <CardTitle className="display-4" style={{ color: "white" }}>
                {" "}
              </CardTitle>

              {/* <CardText className="text-sm font-weight-bold">
                Last updated 3 mins ago
              </CardText> */}
            </div>
          </CardImgOverlay>
          <Row className="justify-content-center" style={{ marginTop: "30" }}>
            <Col className="order-sm-2">
              <div className="card-profile-image sm">
                <img
                  style={{ width: "80px" }}
                  alt="..."
                  className="rounded-circle md"
                  src={require("../assets/img/theme/bootstrap.jpg")}
                />
              </div>
            </Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-2 pb-0 "></CardHeader>
          <CardBody className="pt-0">
            <div className="text-center">
              <div className="mt-3"></div>
              <h5></h5>
              <h5 className="h3">
                <span className="font-weight-light">
                  <strong> {this.props.user && this.props.user.name}</strong>
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-email-83"></i> <strong> Email</strong>:{" "}
                  {this.props.user && this.props.user.email}
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-tablet-button"></i> <strong>Phone</strong>{" "}
                  :
                </span>
              </h5>{" "}
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-pin-3"></i>{" "}
                  <strong>Billing address</strong> :
                </span>
              </h5>{" "}
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-email-83"></i> <strong> Following</strong>
                  : {this.props.user && this.props.user.following.length}{" "}
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-tablet-button"></i>{" "}
                  <strong>Refunds</strong> :
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-delivery-fast"></i>{" "}
                  <strong> Orders</strong> :{" "}
                  {/* {this.props.plug.doc.plugAddress &&
                    this.props.plug.doc.plugAddress.city}
                  ,
                  {this.props.plug.doc.plugAddress &&
                    this.props.plug.doc.plugAddress.country} */}
                  {this.props.myOrders && this.props.myOrders.length}{" "}
                </span>
              </h5>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
              </div>{" "}
              <Col xl="12">
                <ButtonGroup className="btn-group-toggle ">
                  <Button
                    tag="label"
                    className={classNames("btn-simple")}
                    color="primary"
                    id="0"
                    size="sm"
                    // onClick={() => this.setBgChartData("data1")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      <i className="ni ni-settings"></i> Settings
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                  <Button
                    color="primary"
                    id="1"
                    size="sm"
                    outline
                    tag="label"
                    className={classNames("btn-simple")}
                    onClick={() => this.setBgChartData("data2")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      <i className="ni ni-archive-2"></i> Order history
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-gift-2" />
                    </span>
                  </Button>
                  <Button
                    color="primary"
                    id="2"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple")}
                    onClick={() => this.setBgChartData("data3")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      <i className="ni ni-mobile-button"></i> Contact us
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-tap-02" />
                    </span>
                  </Button>
                </ButtonGroup>
              </Col>
            </div>
          </CardBody>
        </Card>
        <Card>
          {" "}
          <CardBody>
            {" "}
            <ListGroup className="list my--3" flush>
              <h5 className="h3">
                Wishlist( {this.props.user && this.props.user.wishlist.length})
              </h5>
              {this.props.user &&
                this.props.user.wishlist.map((product) => (
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-1.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        {" "}
                        <Link to={`/product/${product._id}`}>
                          <h5 className="mb-0">
                            <a href="#pablo">{product.name}</a>
                          </h5>
                        </Link>
                        <span className="text-success">●</span>
                        <small>Available</small>
                      </div>
                      <div className="button-group">
                        {" "}
                        <Button
                          className=" btn-icon"
                          color="info"
                          size="sm"
                          type="button"
                          onClick={() =>
                            this.props.addItem(product) &&
                            this.props.removeFromWishlist(product._id)
                          }
                          style={{ marginRight: "5px" }}
                        >
                          <i class="ni ni-cart"></i>
                        </Button>
                        <Button
                          className=" btn-icon"
                          color="danger"
                          size="sm"
                          type="button"
                          onClick={() =>
                            this.props.removeFromWishlist(product._id)
                          }
                        >
                          <i class="fa fa-trash"></i>
                        </Button>
                      </div>
                      <Col className="col-auto"></Col>
                      <Col className="col-auto"></Col>
                    </Row>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </CardBody>
        </Card>
      </>
    );
  }
}

Cards.defaultProps = {
  catergories: [],
  product: {},
  plug: {},
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
});

export default connect(mapStateToProps, {
  followPlug,
  unfollowPlug,
  setAlert,
  addItem,
  removeFromWishlist,
  createPlug,
  getPlug,
  getMyOrders,
})(Cards);
