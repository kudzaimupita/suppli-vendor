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
} from "reactstrap";
import PlugHeader from "../components/PlugDashHeader";
import { connect, MapStateToProps } from "react-redux";
import { getProducts, getNewArrivals } from "../actions/products";
import { loadMyPlug } from "../actions/auth";
import MainNavbar from "../components/MainNavbar";
import Header from "../components/PlugDashHeader";
import PlugProfileCard from "../components/PlugProfileCard";
import PlugCharts from "../components/PlugCharts";
import PlugProfile from "../components/PlugProfile";
import PlugOrders from "../components/PlugOrders";
import Footer from "../components/AdminFooter";

class PlugDashboard extends React.Component {
  componentDidMount() {
    this.props.loadMyPlug();
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
        <MainNavbar />
        <Header />
        <main>
          {console.log(this.props.myPlug.plug)}
          <section
            className="section section-shaped section-lg"
            style={{ marginLeft: 50, marginRight: 50, marginBottom: 30 }}
          >
            {/* <Container className="mt--7" fluid style={{ marginTop: 30 }}> */}

            <Row>
              <Col lg="8" md="12" xs="12">
                {" "}
                <PlugOrders />
                {/* <PlugProfileCard /> */}
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-sm-row nav-dark"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                    size="sm"
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 1}
                        className={classnames("mb-sm-3 mb-lg-0", {
                          active: this.state.tabs === 1,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 1)}
                        href="#pablo"
                        role="tab"
                        size="sm"
                      >
                        <i class="fa fa-dolly mr-2" />
                        Orders
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
                        <i class="fa fa-shopping-bag mr-2 " />
                        Products
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 3}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.tabs === 3,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 3)}
                        href="#pablo"
                        role="tab"
                      >
                        <i class="fa fa-mail-bulk mr-2" />
                        Email campaign
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 4}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.tabs === 4,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 4)}
                        href="#pablo"
                        role="tab"
                      >
                        <i class="fa fa-users mr-2" />
                        Customers
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 3}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.tabs === 3,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 3)}
                        href="#pablo"
                        role="tab"
                      >
                        <i class="fas fa-chart-line mr-2" />
                        Charts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 6}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.tabs === 6,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 6)}
                        href="#pablo"
                        role="tab"
                      >
                        <i class="fa fa-cogs mr-2" />
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="shadow" style={{ padding: 0 }}>
                  <CardBody>
                    <TabContent activeTab={"tabs" + this.state.tabs}>
                      <TabPane tabId="tabs1"></TabPane>
                      <TabPane tabId="tabs2">
                        <PlugCharts />
                      </TabPane>
                      <TabPane tabId="tabs3">
                        <PlugProfile />
                      </TabPane>
                      <TabPane tabId="tabs4">
                        <PlugOrders />
                      </TabPane>
                      <TabPane tabId="tabs6">rtyghjk</TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="12" xs="12">
                <PlugProfileCard />
              </Col>
            </Row>
          </section>
          {/* </Container> */}
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,

  myPlug: state.myPlug,
});

export default connect(mapStateToProps, {
  getProducts,
  loadMyPlug,

  getNewArrivals,
})(PlugDashboard);
