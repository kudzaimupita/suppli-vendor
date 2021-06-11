import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
} from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class UserNavDropdown extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav>
            <Media className="align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <img
                  alt="..."
                  src={`http://localhost:5000/img/users/${this.props.auth.user && this.props.auth.user.imageCover}`}
                />
              </span>
              <Media className="ml-2 d-none d-lg-block">
                <span className="mb-0 text-sm font-weight-bold">
                  {this.props.auth.user ? this.props.auth.user.name : null}
                </span>
              </Media>
            </Media>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            {/* <DropdownItem className="noti-title" header tag="div">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </DropdownItem>
            <Link to="/profile">
              <DropdownItem>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
            </Link>
            <Link href="/admin/profile">
              <DropdownItem>
                <i className="ni ni-settings-gear-65" />
                <span>Wishlist</span>
              </DropdownItem>
            </Link>
            <Link href="/admin/profile">
              <DropdownItem>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
            </Link>
            <Link href="/admin/profile">
              <DropdownItem>
                <i className="ni ni-support-16" />
                <span>Refunds</span>
              </DropdownItem>
            </Link>
            <DropdownItem divider /> */}
            <DropdownItem href="#pablo" onClick={() => this.props.logout()}>
              <i className="ni ni-user-run" />

              <span>Sign out</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,

  isAuthenticated: state.auth,
});

export default connect(mapStateToProps, { logout })(UserNavDropdown);
