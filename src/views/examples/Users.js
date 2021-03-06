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
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header";
import CreatePlugInfoCards from "../../components/CreatePlugInfoCards1";
import PlugUsers from "../../components/PlugUsers";
import EmailCampign from "../../components/EmailCampaignTransfer";
class Tables extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container className="mt--7 " fluid >
          <Row> <Col xl="9">  <EmailCampign/></Col>
        
            <Col  xl="3">
              {" "}
              <PlugUsers />
            </Col >
           
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
