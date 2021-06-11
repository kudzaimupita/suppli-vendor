import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import PlugProfile from "../components/PlugProfile";
import MainNavbar from "../components/MainNavbar";
import CreatePlugInfoCards from "../components/CreatePlugInfoCards";

class InputGroups extends React.Component {
  state = {};
  render() {
    return (
      <>
        <MainNavbar />{" "}
        <Container>
          {" "}
          <Row style={{ margin: 10, marginTop: 40 }}>
            <Col lg="8" md="12 " sm="12">
              <PlugProfile />
            </Col>
            <Col lg="4" md="12 " sm="12">
              <CreatePlugInfoCards />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default InputGroups;
