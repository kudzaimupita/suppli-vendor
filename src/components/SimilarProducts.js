import React, { PureComponent } from "react";
import { createPlug } from "../actions/plugs";
import { createProduct, getProduct, updateProduct } from "../actions/products";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, withRouter, Link } from "react-router-dom";
import RatingStars from "./RatingStars1";
import ReactQuill from "react-quill";
import ProductCard from "../components/ProductCard";
import Images from "./Gallery";
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
// import { Select } from "@material-ui/core";

class PlugApplication extends PureComponent {
  render() {
    return (
      <>
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <p className="lead text-muted">
              -----------------Customers also bought-----------------
            </p>
          </Col>
        </Row>
        <div style={{}}>
          {" "}
          <Row
            style={{
              marginRight: 65,
              marginLeft: 65,
              //   justifyContent: "center",
              //   maxHeight: "400px",
              //   border: "8px",
              //   display: "flex",
              //   overflowX: "scroll",

              //   flexDirection: "column",
            }}
          >
            {" "}
            {this.props.product.similarProducts ? (
              this.props.product.similarProducts.map((product) => (
                <Col
                  style={{ marginTop: 20, justifyContent: "center" }}
                  md="3"
                  sm="6"
                  xs="6"
                  lg="3"
                  xl="3"
                  className='mb-5 mb-xl-0" xl="6'
                >
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <Col style={{ justifyContent: "center" }}>
                <Spinner />
              </Col>
            )}
          </Row>
        </div>
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

  cartItems: state.cart.cartItems,

  auth: state.auth.isAuthenticated,
  product: state.product.product,
  isAuthenticated: state.auth,
  loading: state.auth.loading,
  createdPlugLoading: state.createdPlug.loading,
  catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {
  createProduct,
  setAlert,
  createPlug,
  getProduct,
  updateProduct,
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
})(withRouter(PlugApplication));
