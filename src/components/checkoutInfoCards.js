/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <>
        <Container style={{ marginTop: 70 }}>
          <Row className="justify-content-center text-center mb-lg">
            <Col lg="8">
              {/* <h2 className="display-3">Your information is secure</h2> */}
              <p className="lead text-muted">
                -----------------Your information is secure-----------------
              </p>
            </Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{
              marginBottom: 40,
              marginRight: 20,
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card
                    className="card-lift--hover shadow border-0"
                    style={{ alignItems: "center" }}
                  >
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i class="fa fa-key"></i>
                      </div>
                      <h4 className="text-primary text-uppercase">
                        Secure payments
                      </h4>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          design
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          system
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          creative
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-istanbul" />
                      </div>
                      <h6 className="text-success text-uppercase">
                        Build Something
                      </h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                      <div>
                        <Badge color="success" pill className="mr-1">
                          business
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          vision
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          success
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="success"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-planet" />
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Prepare Launch
                      </h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                      <div>
                        <Badge color="warning" pill className="mr-1">
                          marketing
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          product
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          launch
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Landing;
