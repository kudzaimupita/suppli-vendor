import React, { PureComponent } from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Col,
  Row,
  Carousel,
  Badge,
  Button,
  Container,
} from "reactstrap";

import Breadcrumb from "../components/Breadcrumb";
import CheckoutInfoCards from "../components/checkoutInfoCards";
import MainNavbar from "../components/MainNavbar";
import AdminFooter from "../components/AdminFooter";
import Header from "../components/PlugDashHeader";
import PlugProfileCard from "../components/PlugProfileCard";
import PlugCharts from "../components/PlugCharts";
import PlugProfile from "../components/PlugProfile";
import PlugOrders from "../components/PlugOrders";
import Carousels from "../components/Carousels";
import PlugCard from "../components/PlugCard";
import LandingCard from "../components/LandingCard";
import ProductCard from "../components/ProductCard";
import ProductGlide from "../components/ProductGlide";
import PlugHeader from "../components/PlugDashHeader";
import { connect, MapStateToProps } from "react-redux";
import { getProducts, getNewArrivals } from "../actions/products";
import { addItem } from "../actions/cart";
import Spinner from "../components/Spinner";
import Checkout from "../components/checkout";
import ContactForm from "../components/ContactForm";
import CardGroup from "../components/CardGroup";
import BottomNavigation from "../components/ButtomNavigation";
import BrandCaroussel from "../components/BrandCaroussel";

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.getNewArrivals();
  }
  state = {
    tabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  render() {
    return (
      <>
        {/* <Breadcrumb /> */}
        <MainNavbar />
        <PlugHeader />
        <Row style={{ margin: 15 }}>
          <Col md="12">
            {" "}
            <BrandCaroussel />
          </Col>
        </Row>
        <Row style={{ margin: 15 }}>
          <Col md="6">
            {" "}
            <Carousels />
          </Col>
          <Col md="6" xs="none">
            <CardGroup />
          </Col>
        </Row>
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <p className="lead text-muted">
              -----------------New Arrivals-----------------
            </p>
          </Col>
        </Row>
        <div>
          {" "}
          <Row
            style={{
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            {" "}
            {this.props.newArrivals ? (
              this.props.newArrivals.map((product) => (
                <Col
                  style={{ marginTop: 20 }}
                  md="3"
                  sm="4"
                  xs="6"
                  lg="3"
                  xl="2"
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
        {/* <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <p className="lead text-muted">
              -----------------Trending-----------------
            </p>
          </Col>
        </Row>
        <div style={{}}>
          {" "}
          <Row
            style={{
              marginRight: 20,
              marginLeft: 20,
              justifyContent: "center",
              maxHeight: "400px",
              border: "8px",
              display: "flex",
              overflowX: "scroll",

              flexDirection: "column",
            }}
          >
            {" "}
            {this.props.products ? (
              this.props.products.map((product) => (
                <Col
                  md="2"
                  xs="6"
                  sm="4"
                  style={{ marginTop: 20 }}
                  className='mb-5 mb-xl-0" xl="8'
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
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <p className="lead text-muted">
              -----------------Catalogue by @Game-----------------{" "}
              <Button
                className=" btn-icon btn-simple"
                color="default"
                type="button"
                size="sm"
              >
                Visit plug
              </Button>
            </p>
          </Col>
        </Row>
        <div style={{}}>
          {" "}
          <Row
            style={{
              marginRight: 20,
              marginLeft: 20,
              justifyContent: "center",
              maxHeight: "400px",
              border: "8px",
              display: "flex",
              overflowX: "scroll",

              flexDirection: "column",
            }}
          >
            {" "}
            {this.props.products ? (
              this.props.products.map((product) => (
                <Col
                  md="2"
                  xs="6"
                  sm="4"
                  style={{ marginTop: 20 }}
                  className='mb-5 mb-xl-0" xl="8'
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
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <p className="lead text-muted">
              -----------------Catalogue by @Kuluna-----------------{" "}
              <Button
                className=" btn-icon btn-simple"
                color="default"
                type="button"
                size="sm"
              >
                Visit plug
              </Button>
            </p>
          </Col>
        </Row>
        <div style={{}}>
          {" "}
          <Row
            style={{
              marginRight: 20,
              marginLeft: 20,
              justifyContent: "center",
              maxHeight: "400px",
              border: "8px",
              display: "flex",
              overflowX: "scroll",

              flexDirection: "column",
            }}
          >
            {" "}
            {this.props.products ? (
              this.props.products.map((product) => (
                <Col
                  md="2"
                  xs="6"
                  sm="4"
                  style={{ marginTop: 20 }}
                  className='mb-5 mb-xl-0" xl="8'
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
        <CheckoutInfoCards />
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <p className="lead text-muted">
              -----------------Contact us-----------------
            </p>
          </Col>
        </Row>{" "} */}
        <ContactForm />
        <AdminFooter />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.orders,
  newArrivals: state.newArrivals.products,
});

export default connect(mapStateToProps, {
  getProducts,
  addItem,
  getNewArrivals,
})(LandingPage);
