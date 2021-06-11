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
import ProductDetail from "../components/ProductDetails";
import PlugCard from "../components/PlugProfileCard";
import SimilarProducts from "../components/SimilarProducts";
import {
  clearItemFromCart,
  clearCart,
  addItem,
  removeItem,
} from "../actions/cart";
import { getPlug } from "../actions/plugs";
import { getProduct } from "../actions/products";
import Header from '../components/Headers/Header'
class Profile extends React.Component {
  render() {
    return (
      <>
         <Header />
        <Container className="mt--7" fluid>
          {" "}
        <Row><Col style={{marginRight:'50px',marginLeft:'50px'}}>     <ProductDetail /></Col></Row>
         
       
        </Container>
        {/* <Container>
          {" "}
          <SimilarProducts />
        </Container> */}
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
