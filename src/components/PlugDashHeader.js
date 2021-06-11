/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { PureComponent, defaultProps } from "react";
import PlugHeader from "../components/PlugDashHeader";
import { connect, MapStateToProps } from "react-redux";
import { getProducts, getNewArrivals } from "../actions/products";
import { addItem } from "../actions/cart";
// reactstrap components
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        {/* <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"> */}
        {/* Card stats */}

        <Row style={{ margin: 10, marginTop: 20 }}>
          <Col lg="3">
            <Card className="card-stats mb-4 mb-xl-0" color="default">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      1-5 day delivery
                    </CardTitle>

                    <span
                      className="h4 font-weight-bold mb-0"
                      style={{ color: "white" }}
                    >
                      Fast delivery{" "}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                      <i className="ni ni-delivery-fast"></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-stats mb-4 mb-xl-0" color="default">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      {/* {this.props.myPlug.followers.map(
                        (follower) => follower.name
                      )} */}
                      1st week return policy
                    </CardTitle>
                    <span
                      className="h4 font-weight-bold mb-0"
                      style={{ color: "white" }}
                    >
                      Collection is on us
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i class="ni ni-basket"></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-stats mb-4 mb-xl-0" color="default">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Order tracking
                    </CardTitle>
                    <span
                      className="h4 font-weight-bold mb-0"
                      style={{ color: "white" }}
                    >
                      Dashboard to track orders
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                      <i class="ni ni-bag-17"></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-stats mb-4 mb-xl-0" color="default">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      2 step checkout
                    </CardTitle>
                    <span
                      className="h4 font-weight-bold mb-0"
                      style={{ color: "white" }}
                    >
                      Secure checkout
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="ni ni-watch-time" />
                    </div>
                  </Col>
                </Row>
                {/* <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 12%
                  </span>{" "}
                  <span className="text-nowrap">Since last month</span>
                </p> */}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* </div> */}
      </>
    );
  }
}

Header.defaultProps = {
  myPlug: {},
  myFollowers: [],
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,

  myPlug: state.myPlug.plug,
});

export default connect(mapStateToProps, {})(Header);
