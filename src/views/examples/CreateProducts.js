import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "../../components/Headers/Header";
import Header from "../../components/Headers/Header";
import CreateProductForm from "../../components/CreateProductForm";
import CreateProductInfoCard from "../../components/CreateProductInfoCard";
class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            {" "}
            <Col className="order-xl-1" xl="8">
              {" "}
              <CreateProductForm />
            </Col>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <CreateProductInfoCard />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
