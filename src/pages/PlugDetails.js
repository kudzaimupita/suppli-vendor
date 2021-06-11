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
import ProductDetailReviews from "../components/ProductDetailReviews";
import { connect } from "react-redux";
import RegisterModal from "../components/RegisterModal";
import CreateReviewForm from "../components/CreateReviewForm";
import PlugDetailMain from "../components/PlugDetailMain";
import PlugDetailCard from "../components/PlugDetailCard";
import PlugDetailReviewForm from "../components/PlugDetailReviewForm";
import { getPlug } from "../actions/plugs";
import {
  clearItemFromCart,
  clearCart,
  addItem,
  removeItem,
} from "../actions/cart";

import { getProduct } from "../actions/products";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getPlug(this.props.match.params.plugid);
  }
  render() {
    return (
      <>
        <MainNavbar />{" "}
        <Container fluid>
          {" "}
          <Row style={{ margin: 20, marginBottom: 20 }}>
            <Col xl="8" xs="12">
              <PlugDetailMain />
            </Col>
            <Col xl="4" xs="12">
              <PlugDetailCard />
              <PlugDetailReviewForm />
            </Col>
          </Row>
        </Container>
        <Container> {/* <SimilarProducts /> */}</Container>
        {/* <CheckoutInfoCards /> */}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  plug: state.plug,
  cartTotalPrice: selectCartTotal(state),
  cart: state.cart,
  auth: state.auth.isAuthenticated,
  product: state.product.product,
});

export default connect(mapStateToProps, {
  getPlug,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
})(Profile);
