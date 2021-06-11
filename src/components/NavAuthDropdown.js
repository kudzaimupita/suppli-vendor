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

class UserNavDropdown extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav></DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem className="noti-title" header tag="div">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </DropdownItem>
            <Link href="/admin/profile">
              <DropdownItem>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
            </Link>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              <i className="ni ni-user-run" />
              <span>Sign out</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default UserNavDropdown;
