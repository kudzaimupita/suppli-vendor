import React from "react";
import Review from "./RatingStars";
import Rating from "@material-ui/lab/Rating";
// reactstrap components
import { connect } from "react-redux";
import { createPlug } from "../actions/plugs";
import { createProduct, getProduct, updateProduct } from "../actions/products";
import { setAlert } from "../actions/alert";
import { createProductReview } from "../actions/productReviews";
import SignInModal from "../components/SignInModal";
import { useHistory, withRouter, Link } from "react-router-dom";
import RatingStars from "./RatingStars1";
import ReactQuill from "react-quill";
import RegisterModal from "../components/RegisterModal";
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

import {
  Badge,
  Button,
  ListGroupItem,
  Form,
  Input,
  FormGroup,
  ListGroup,
  Progress,
  Row,
  Card,
  CardBody,
  Col,
} from "reactstrap";

class ListGroups extends React.Component {
  state = { review: "", rating: "" };

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
  };

  render() {
    return <></>;
  }
}

ListGroups.defaultProps = {
  catergories: [],
  product: {},
};

const mapStateToProps = (state) => ({
  cart: selectCartItemsCount(state),
  cartTotalPrice: selectCartTotal(state),

  cartItems: state.cart.cartItems,
  user: state.auth.user,
  auth: state.auth.isAuthenticated,
  product: state.product.product,
  isAuthenticated: state.auth,
  loading: state.auth.loading,
  createdPlugLoading: state.createdPlug.loading,
  catergories: state.catergories.catergories,
  createdReview: state.createdProductReview,
});

export default connect(mapStateToProps, {
  createProduct,
  setAlert,
  createPlug,
  createProductReview,
  getProduct,
  updateProduct,
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
})(withRouter(ListGroups));
