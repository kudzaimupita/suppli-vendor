import React, { PureComponent } from "react";
import { createPlug, getPlug } from "../actions/plugs";
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
import { useHistory, withRouter, Link } from "react-router-dom";
import RatingStars from "../components/RatingStars";
import ReactQuill from "react-quill";
import RegisterModal from "../components/RegisterModal";
import Images from "./Gallery";
import Rating from "@material-ui/lab/Rating";
import { createProductReview } from "../actions/productReviews";
import { Empty, List } from "antd";
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

import TagsInput from "react-tagsinput";
import TagsCss from "../assets/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";
import Select from "./ReactSelect";
import {
  ListGroupItem,
  ListGroup,
  Button,
  UncontrolledTooltip,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Collapse,
  Badge,
  Progress,
  Spinner,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Modal,
  Container,
} from "reactstrap";
import { Component } from "react";
// import { Select } from "@material-ui/core";

class PlugApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCollapses: ["collapseOne"],
    };
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = (collapse) => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: [],
      });
    } else {
      this.setState({
        openedCollapses: [collapse],
      });
    }
  };
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  state = {
    defaultModal: false,
    tags: [],

    sizes: [],
    colors: [],
    review: "",
    rating: "",
  };

  handleSizesChange = (sizes) => {
    this.setState({ sizes });
  };
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleReviewChange = (e) => {
    this.setState({ review: e.target.value });
  };

  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.props.createProductReview(
      {
        review: this.state.review,
        rating: this.state.rating,
      },
      this.props.product.product._id
    );
    this.toggleModal("formModal");
    this.setState({ review: "", rating: "" });
    this.forceUpdate();
  };

  addToWishlistButton = (
    <Button
      outline
      disabled
      className="my-4"
      color="info"
      block
      type="button"
      onClick={() =>
        this.props.addToWishlist(
          this.props.product.product && this.props.product.product._id
        )
      }
    >
      <i className="ni ni-favourite-28"></i> Add to wishlist
    </Button>
  );

  removeFromWishlistButton = (
    <Button
      disabled
      outline
      className="my-4"
      color="info"
      block
      type="button"
      onClick={() =>
        this.props.removeFromWishlist(
          this.props.product.product && this.props.product.product._id
        )
      }
    >
      <i className="ni ni-favourite-28"></i> Remove from wishlist
    </Button>
  );

  render() {
    return (
      <>
        <Breadcrumb listClassName="breadcrumb-default bg-default" size="sm">
          <Link to="/admin/products">
            {" "}
            <BreadcrumbItem color="white">Back to products</BreadcrumbItem>
          </Link>
          <BreadcrumbItem active color="white">
            {"     "}
          </BreadcrumbItem>

          <BreadcrumbItem active color="white">
            product
          </BreadcrumbItem>
        </Breadcrumb>
            {this.props.loading && <div
                className="example"
                style={{
                    marginTop: '300px',
                    borderRadius: ' 4px',
                    textAlign: 'center',
                    // margin: ' 20px 0',
                    marginBottom: '20px',
                    padding: '40px 90px',
                    background: '#fff',
                    zIndex: '99',
                    width: '100%',
                    height: '100%',
                    margin: 'auto',
                    display: 'block',
                    position: 'relative',
                }}>
                <Spinner size="large" />
            </div>}
        <Card className="bg-white shadow" style={{ marginBottom: "30px" }}>
          <CardBody>
            <Form style={{ padding: "0" }}>
              <Row style={{ padding: "0" }}>
                <Col md="5" style={{ padding: "0" }}>
                  <Images
                    product={
                      this.props.product.product && this.props.product.product
                    }
                  />
                  <Col sm="6" md="6" lg="6">
                    {" "}
                  </Col>
                </Col>
                <Col lg="6">
                  <Row style={{ marginLeft: "1px" }}>
                    <h2>
                      {this.props.product.product &&
                        this.props.product.product.name}
                    </h2>
                    {"  "}
                    <Link
                      to={`/admin/edit-product/${
                        this.props.product.product &&
                        this.props.product.product._id
                      }`}
                    >
                      {" "}
                      <Button
                        className=" btn-icon"
                        color="default"
                        size="sm"
                        type="button"
                        // onClick={() => this.props.editProduct(product)}
                        style={{ height: "25px", marginLeft: "10px" }}
                      >
                        <i class="fa fa-edit"></i> edit
                      </Button>
                    </Link>
                  </Row>
                  <h4>
                    {this.props.product.product &&
                      this.props.product.product.brandName}
                  </h4>
                  <small>
                    By{" "}
                    {this.props.product.product &&
                      this.props.product.product.plug.name}
                  </small>{" "}
                  <Row style={{ paddingLeft: "13px" }}>
                    {" "}
                    <Rating
                      value={
                        this.props.product.product &&
                        this.props.product.product.ratingsAverage
                      }
                      size="small"
                      precision={0.5}
                      readOnly
                      name="unique-rating"
                    />
                    <h6>
                      (
                      {this.props.product.product &&
                        this.props.product.product.ratingsAverage}
                      )
                    </h6>
                  </Row>{" "}
                  <small>
                    {" "}
                    <a
                      // onClick={() => this.toggleModal("formModal")}
                      href="#pablo"
                    >
                      Write a review
                    </a>
                  </small>
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
                            <small>Write a review</small>
                          </div>
                          <Form role="form">
                            <FormGroup className="mb-3">
                              <div className="text-center">
                                {" "}
                                <Rating
                                  name="rating"
                                  value={this.state.rating}
                                  size="small"
                                  precision={0.5}
                                  onChange={this.handleRatingChange}
                                />
                              </div>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup className="input-group-alternative">
                                <Input
                                  placeholder="Write a review"
                                  type="textarea"
                                  // size="sm"
                                  name="review"
                                  value={this.state.review}
                                  onChange={this.handleReviewChange}
                                />
                              </InputGroup>
                            </FormGroup>

                            <div className="text-center">
                              <Button
                                disabled
                                block
                                size="sm"
                                className="my-1"
                                color="info"
                                type="button"
                                onClick={(e) => this.onSubmit(e)}
                              >
                                Submit review
                              </Button>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </div>
                  </Modal>
                  <Col>
                    <h3
                      style={{ textAlign: "end", paddingTop: "0px" }}
                      color="warning"
                    >
                      {this.props.product.product &&
                        new Intl.NumberFormat("de-ZA", {
                          style: "currency",
                          currency: "ZAR",
                        }).format(this.props.product.product.price)}
                    </h3>
                  </Col>
                  {this.props.product.product &&
                  this.props.product.product.was ? (
                    <div
                    // style={{
                    //   position: "absolute",
                    //   bottom: "300px",
                    //   left: "280px",
                    //   // zInd8x: 100,
                    // }}
                    >
                      <Button
                        color="danger"
                        type="button"
                        // onClick={this.props.clearCart}
                        size="sm"
                        className="h5"
                      >
                        <h5
                          className="h6"
                          style={{ color: "white", padding: "0px" }}
                          style={{ marginBottom: "0px", marginTop: "0px" }}
                        >
                          <span
                            className="font-weight-light"
                            style={{ padding: 0 }}
                            style={{ color: "white" }}
                          >
                            <i class="fa fa-tags"></i> Was
                          </span>
                        </h5>{" "}
                        <h4
                          style={{
                            color: "white",
                            padding: "0px",
                            marginTop: "0px",
                          }}
                        >
                          {" "}
                          <strike>
                            R
                            {this.props.product.product &&
                              this.props.product.product.was}
                          </strike>
                        </h4>
                      </Button>

                      {/* <h4 style={{ color: "white" }}>R{this.props.product.price}</h4> */}
                    </div>
                  ) : null}
                  <small>
                    {this.props.product.product &&
                    this.props.product.product.clearance
                      ? "Clearance sale!"
                      : null}
                  </small>
                  <Row>
                    <Col xl="12" xs="12">
                      <Badge color="warning">
                        <strong>
                          {this.props.product.product &&
                            this.props.product.product.quantityInStock}
                        </strong>
                        {"   "}
                        in stock
                      </Badge>{" "}
                      <i
                        class="fa fa-info-circle"
                        data-placement="top"
                        id="tooltip611234743"
                        onClick={() => this.toggleModal("defaultModal")}
                      ></i>{" "}
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip611234743"
                      >
                        See shopping details
                      </UncontrolledTooltip>
                      <small
                        data-placement="top"
                        id="tooltip611234743"
                        // onClick={() => this.toggleModal("defaultModal")}
                      >
                        Shipping info{"  "}
                      </small>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.defaultModal}
                        toggle={() => this.toggleModal("defaultModal")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Type your modal title
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                          </p>
                          <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <Button color="primary" type="button">
                            Save changes
                          </Button>
                          <Button
                            className="ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>
                      <h3>
                        {" "}
                        {/* {console.log(
                            this.props.cartItems &&
                              this.props.cartItems.filter(
                                (product) =>
                                  product._id ===
                                  this.props.product.product._id.map(
                                    (productt) => productt.quantity
                                  )
                              )
                          )} */}
                      </h3>
                      <Button
                        disabled
                        className=" btn-icon"
                        color="info"
                        size="sm"
                        type="button"
                        onClick={() =>
                          this.props.removeItem(this.props.product.product)
                        }
                      >
                        <i class="fa fa-minus"></i>
                      </Button>
                      <Button
                        disabled
                        className=" btn-icon"
                        color="success"
                        size="sm"
                        type="button"
                        onClick={() =>
                          this.props.addItem(this.props.product.product)
                        }
                      >
                        <i class="fa fa-plus"></i>
                      </Button>
                      <Button
                        disabled
                        className=" btn-icon"
                        color="danger"
                        size="sm"
                        type="button"
                        onClick={() =>
                          this.props.clearItemFromCart(
                            this.props.product.product
                          )
                        }
                      >
                        <i class="fa fa-trash"></i>
                      </Button>
                    </Col>{" "}
                    <Col xl="6" xs="6">
                      {" "}
                      <Col xl="6" xs="6"></Col>
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col> </Col>
                    <Col xl="12" xs="12">
                      {" "}
                      <Row>
                        {" "}
                        <Col style={{ textAlign: "end" }}> </Col>{" "}
                      </Row>
                    </Col>
                    <Col xl="12">
                      {this.props.product.product &&
                      this.props.user &&
                      this.props.product.product.likes.find(
                        (like) => like === this.props.user._id
                      )
                        ? this.removeFromWishlistButton
                        : this.addToWishlistButton}{" "}
                      <Link to="/checkout">
                        {" "}
                        <Button
                          disabled
                          className="my-4"
                          color="primary"
                          block
                          type="button"
                        >
                          <i className="ni ni-curved-next"></i> Proceed to
                          checkout
                        </Button>
                      </Link>{" "}
                    </Col>{" "}
                  </Row>{" "}
                </Col>
              </Row>

              <Card className="card-plain">
                <CardHeader
                  role="tab"
                  onClick={() => this.collapsesToggle("collapseThree")}
                  aria-expanded={this.state.openedCollapses.includes(
                    "collapseThree"
                  )}
                  style={{ marginRight: "0" }}
                >
                  <h5 className="mb-0">Product description</h5>
                </CardHeader>
                <Collapse
                  role="tabpanel"
                  isOpen={this.state.openedCollapses.includes("collapseThree")}
                >
                  <CardBody>
                    <div className="h5 font-weight-300">
                      {this.props.product.product &&
                        this.props.product.product.description}
                    </div>
                  </CardBody>
                </Collapse>
              </Card>

              <Card className="card-plain">
                <CardHeader
                  role="tab"
                  onClick={() => this.collapsesToggle("collapse6")}
                  aria-expanded={this.state.openedCollapses.includes(
                    "collapse6"
                  )}
                  style={{ marginRight: "0" }}
                >
                  <h5 className="mb-0">Key features</h5>
                </CardHeader>
                <Collapse
                  role="tabpanel"
                  isOpen={this.state.openedCollapses.includes("collapse6")}
                >
                  <CardBody>
                    <List
                      size="small"
                      // header={<div>Product key features</div>}

                      bordered
                      dataSource={
                        this.props.product.product &&
                        this.props.product.product.quickPoints.map(
                          (point) => point
                        )
                      }
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </CardBody>
                </Collapse>
              </Card>

              <Card className="card-plain">
                <CardHeader
                  role="tab"
                  onClick={() => this.collapsesToggle("collapse4")}
                  aria-expanded={this.state.openedCollapses.includes(
                    "collapse4"
                  )}
                  style={{ marginRight: "0" }}
                >
                  <h5 className="mb-0">
                    Reviews (
                    {this.props.product.product &&
                      this.props.product.product.ratingsQuantity}
                    )
                  </h5>
                </CardHeader>
                <Collapse
                  role="tabpanel"
                  isOpen={this.state.openedCollapses.includes("collapse4")}
                >
                  <CardBody>
                    <CardBody>
                      <ListGroup flush>
                        {this.props.product.product ? (
                          this.props.product.product.reviews.map((review) => (
                            <ListGroupItem
                              className="list-group-item-action"
                              href="#pablo"
                              tag="a"
                            >
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    alt="..."
                                    className="avatar rounded-circle"
                                    src={require("../assets/img/theme/team-1.jpg")}
                                  />
                                </Col>
                                <div className="col ml--2">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <Row style={{ paddingLeft: "16px" }}>
                                        {" "}
                                        <h4 className="mb-0 text-sm">
                                          {review.user.name}
                                        </h4>{" "}
                                        <RatingStars
                                          rating={review.rating}
                                          style={{ marginLeft: "10px" }}
                                        />
                                      </Row>
                                    </div>
                                    <div className="text-right text-muted">
                                      <small>
                                        {review.createdAt.slice(0, 10)}
                                      </small>
                                    </div>
                                  </div>
                                  <p className="text-sm mb-0">
                                    {review.review}
                                  </p>
                                </div>
                              </Row>
                            </ListGroupItem>
                          ))
                        ) : (
                          <Empty />
                        )}
                        <Empty />
                      </ListGroup>
                    </CardBody>
                  </CardBody>
                </Collapse>
              </Card>
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}

PlugApplication.defaultProps = {
  catergories: [],
  product: {},
};

const mapStateToProps = (state) => ({
  cart: selectCartItemsCount(state),
  cartTotalPrice: selectCartTotal(state),
  plug: state.plug.plug,
  cartItems: state.cart.cartItems,
  user: state.auth.user,
  auth: state.auth.isAuthenticated,
  product: state.product.product,
  isAuthenticated: state.auth,
  loading: state.product.loading,
  createdPlugLoading: state.createdPlug.loading,
  catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {
  createProduct,
  setAlert,
  createPlug,
  getProduct,
  updateProduct,
  createProductReview,
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
  getPlug,
  addToWishlist,
  removeFromWishlist,
})(withRouter(PlugApplication));
