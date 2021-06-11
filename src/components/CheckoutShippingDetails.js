import React, { PureComponent, useState } from "react";
import Checkout from "../components/checkout";

import { connect } from "react-redux";
import { logout } from "../actions/auth";
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
  ListGroupItem,
  ListGroup,
  Progress,
  Button,
  Card,
  Table,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Badge,
} from "reactstrap";

const CheckoutForm = (props) => {
  const [formData, setFormData] = useState({
    postalCode: "",
    country: "South Africa",
    comments: "",
    city: "",
    phone: "",
    address: "",
  });

  const { postalCode, city, comments, country, phone, address } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <Card className="bg-white ">
        <CardBody>
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
                    Phone<span className="text-danger"> *</span>
                  </label>
                  <Input
                    className="form-control"
                    id="input-address"
                    placeholder="phone"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={onChange}
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
                    value={city}
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <label
                    className="labels"
                    htmlFor="input-country"
                    style={{ fontSize: "13px" }}
                  >
                    Physical address<span className="text-danger"> *</span>
                  </label>
                  <Input
                    className="form-contro"
                    id="input-address"
                    placeholder="Home Address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={onChange}
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
                    value={postalCode}
                    onChange={onChange}
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
                    placeholder="Country"
                    type="text"
                    disabled
                    name="country"
                    value={country}
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>{" "}
          {/* <ul className="list-unstyled ">
            <li className="py-1" style={{ justifyContent: "center" }}>
              <div className="d-flex align-items-center">
                <div>
                  <Badge className="badge-circle mr-3" color="danger">
                    <i class="fa fa-envelope text-black"></i>
                  </Badge>
                </div>
                <div>
                  <h5 className="h5">
                    <span className="font-weight-light ">
                      <strong>Email</strong> :{" "}
                      {props.auth.user ? props.auth.user.email : null}{" "}
                    </span>
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <Badge className="badge-circle mr-3" color="success">
                    <i className="ni ni-delivery-fast text-black" />
                  </Badge>
                </div>
                <div>
                  <h5 className="h5">
                    <span className="font-weight-light">
                      <strong>Expected date</strong>: {Date.now()}
                    </span>
                  </h5>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div className="d-flex align-items-center">
                <div>
                  <Badge className="badge-circle mr-3" color="info">
                    <i class="fa fa-phone text-black"></i>
                  </Badge>
                </div>
                <div>
        
                  <h5 className="h5">
                    <span className="font-weight-light ">
                      <strong> Phone</strong> : {phone}
                    </span>
                  </h5>
                </div>
              </div>
            </li>

            <li className="py-1">
              <div className="d-flex align-items-center">
                <div>
                  <Badge className="badge-circle mr-3" color="primary">
                    <i className="ni ni-square-pin text-black" />
                  </Badge>
                </div>
                <div>
                  <h5 className="h5">
                    <span className="font-weight-light ">
                      <strong> Shipping address</strong> : {country}, {address},{" "}
                      {city}, {postalCode}{" "}
                    </span>
                  </h5>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div className="d-flex align-items-center">
                <div>
                  <Badge className="badge-circle mr-3" color="warning">
                    <i className="ni ni-tag text-black" />
                  </Badge>
                </div>
                <div>
                  <h5 className="h5">
                    <span className="font-weight-light ">
                      <strong className="text-primary"> Total</strong> :{"  "}
                      {new Intl.NumberFormat("de-ZA", {
                        style: "currency",
                        currency: "ZAR",
                      }).format(
                        props.cartTotalPrice && props.cartTotalPrice + 49.99
                      )}
                    </span>
                  </h5>
                </div>
              </div>
            </li>
          </ul>{" "} */}
          <Row className="align-items-center">
            {/* <div className="col">
              <h3 className="mb-0"></h3>
            </div> */}
          </Row>
          <Table className="align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th scope="col">Field</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <i class="fa fa-envelope text-black"></i> Email
                </th>
                <td>{props.auth.user ? props.auth.user.email : null} </td>
              </tr>

              <tr>
                <th scope="row">
                  {" "}
                  <i class="fa fa-phone text-black"></i> Phone
                </th>
                <td> {phone}</td>
              </tr>
              <tr>
                <th scope="row">
                  <i className="ni ni-pin-3 text-black" /> Shipping address
                </th>
                <td>
                  {" "}
                  {country}, {city}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <i className="ni ni-calendar-grid-58 text-black" /> Delivery
                  date{" "}
                </th>
                <td>
                  {" "}
                  <strong>R hjnk</strong>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <i className="ni ni-ungroup text-black" /> Total{" "}
                </th>
                <td>
                  R <strong>{props.cartTotalPrice}</strong>{" "}
                </td>
              </tr>
              {/* <p className="mt-3 mb-0 text-sm">
                <span className="text-danger mr-5">
                  {"  "}
                  Saved{" "}
                  <strong>
                    {" "}
                    <i class="fa fa-tags"></i>R {props.cartTotalPrice}
                  </strong>
                </span>
                <span className="text-nowrap"></span>
              </p> */}
            </tbody>
          </Table>{" "}
          {/* <Button
              id="checkout-button"
              color="info"
              size="sm"
              role="link"
              outline
            >
              Continue shopping
            </Button> */}
          <Checkout shippingForm={formData} />
        </CardBody>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: selectCartItemsCount(state),
  cartTotalPrice: selectCartTotal(state),
  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug,
});

export default connect(mapStateToProps, {
  logout,
  clearCart,
  clearItemFromCart,
  addItem,
  removeItem,
})(CheckoutForm);
