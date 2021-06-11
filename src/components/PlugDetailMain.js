import React from "react";
import classnames from "classnames";
import ProductCard from "../components/ProductCard";
import {
  createPlug,
  getPlug,
  followPlug,
  unfollowPlug,
} from "../actions/plugs";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, Link } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Col,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

class Navs extends React.Component {
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
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Catalogue
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                Reviews (
                {this.props.plug.doc && this.props.plug.doc.ratingsQuantity})
              </NavLink>
            </NavItem>
            <NavItem disabled>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Collections
              </NavLink>
            </NavItem>
            <NavItem disabled>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                On sale
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <TabContent activeTab={"tabs" + this.state.tabs}>
          <TabPane tabId="tabs1">
            {/* {this.props.plug.doc &&
              this.props.plug.doc.products.map((product) => (
                <ProductCard product={product} />
              ))} */}
            <Row
              style={{
                justifyContent: "center",
                maxHeight: "800px",
                border: "8px",
                display: "flex",
                overflowX: "scroll",

                flexDirection: "row",
              }}
            >
              {" "}
              {this.props.plug.doc
                ? this.props.plug.doc.products.map((product) => (
                    <Col
                      md="3"
                      xs="6"
                      sm="4"
                      xl="3"
                      style={{ paddingBottom: "0" }}
                      className='mb-5 mb-xl-0" xl="8'
                    >
                      <ProductCard product={product} />
                    </Col>
                  ))
                : "fnrkj"}
            </Row>
          </TabPane>
          <TabPane tabId="tabs2">
            <p className="description">
              Cosby sweater eu banh mi, qui irure terry richardson ex squid.
              Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
              american apparel, butcher voluptate nisi qui.
            </p>
          </TabPane>
          <TabPane tabId="tabs3">
            <p className="description">
              Raw denim you probably haven't heard of them jean shorts Austin.
              Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              Mustache cliche tempor, williamsburg carles vegan helvetica.
              Reprehenderit butcher retro keffiyeh dreamcatcher synth.
            </p>
          </TabPane>
        </TabContent>
      </>
    );
  }
}

Navs.defaultProps = {
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
});

export default connect(mapStateToProps, {
  followPlug,
  unfollowPlug,
  setAlert,
  createPlug,
  getPlug,
})(Navs);
