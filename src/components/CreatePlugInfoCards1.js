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
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import NavUserDropdown from "./NavUserDropdown";
import { getProduct, updateProduct } from "../actions/products";
import { loadMyPlug } from "../actions/auth";
import { getPlugStats, getDueAmount } from "../actions/plugs";
// reactstrap components
import {
  Form,
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Landing extends React.Component {
  render() {
    console.log(this.props.product);
    return (
      <>
        <Card
          className="card-lift--hover shadow border-0"
          style={{
            buttom: "200px",
            position: "fixed",
            left: "1050px",
            width: "350px",
          }}
        >
          {" "}
          <h6 className="mb-0">Quick update</h6>
          <CardBody className="py-5">
            <Form>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                  size="sm"
                  defaultValue={
                    this.props.product.product &&
                    this.props.product.product.name
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  type="email"
                  size="sm"
                  defaultValue={
                    this.props.product.product &&
                    this.props.product.product.brandName
                  }
                />
              </FormGroup>

              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  type="email"
                  size="sm"
                  defaultValue={
                    this.props.product.product &&
                    this.props.product.product.price
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  type="email"
                  size="sm"
                  defaultValue={
                    this.props.product.product &&
                    this.props.product.product.quantityInStock
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  type="email"
                  size="sm"
                  defaultValue={
                    this.props.product.product &&
                    this.props.product.product.outOfStock
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input id="exampleFormControlSelect1" type="select" size="sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Input id="exampleFormControlTextarea1" rows="3" size="sm" />
              </FormGroup>
              <Button
                block
                size="sm"
                color="info"
                onClick={() =>
                  this.props.updateProduct(this.props.product.product._id)
                }
              >
                {" "}
                Update product
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}

Landing.defaultProps = {
  catergories: [],
  myPlug: {},
  plugStats: {},
  product: {},
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product.product,
  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug.plug,
  orders: state.plugSales.orders,
  amountDue: state.unBalancedSales.stats,
});

export default connect(mapStateToProps, {
  getProduct,
  logout,
  loadMyPlug,
  getPlugStats,
  updateProduct,
  getDueAmount,
})(Landing);
