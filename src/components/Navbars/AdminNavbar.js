import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import NavUserDropdown from "../../components/NavUserDropdown";
import { getCatergories } from "../../actions/catergories";
import { loadMyPlug } from "../../actions/auth";
// reactstrap components
import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Button,
  NavItem,
} from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";

class AdminNavbar extends React.Component {
  componentDidMount() {
    this.props.loadMyPlug();
  }

  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <NavItem>
              {" "}
              <Link
                className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                to="/"
              >
                <Button
                  className="btn-icon btn-3"
                  color="primary"
                  type="button"
                  size="sm"
                >
                  <span className="btn-inner--icon">
                    <i className="ni ni-send text-info" />
                  </span>
                  <span className="btn-inner--text">Refresh</span>
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              {" "}
              <Link
                className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                to="/"
              >
                {" "}
                <Link to="/admin/create-products">
                  <Button
                    size="sm"
                    color="secondary"
                    className="btn-icon btn-3"
                  >
                    {" "}
                    <span className="btn-inner--icon">
                      <i className="ni ni-archive-2 text-default" />
                    </span>
                    <span className="btn-inner--text">Add product</span>
                  </Button>
                </Link>
              </Link>
            </NavItem>

            {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"> */}
              {/* <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup> */}
            {/* </Form> */}
            {/* <i className="ni ni-bell-55" /> */}
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <NavItem style={{ marginLeft: 15, marginRight: 40 }} size="sm">
                <NavUserDropdown user={this.props.auth.user} />
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

AdminNavbar.defaultProps = {
  catergories: [],
  myPlug: {},
};

const mapStateToProps = (state) => ({
  auth: state.auth,

  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug.plug,
});

export default connect(mapStateToProps, {
  logout,
  loadMyPlug,
  getCatergories,
})(AdminNavbar);
