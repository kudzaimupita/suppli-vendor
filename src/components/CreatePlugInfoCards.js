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
        <Card
          className="card-lift--hover shadow border-0"
          style={{ alignItems: "center", marginBottom: 20 }}
        >
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
              <i class="fa fa-key"></i>
            </div>
            <h4 className="text-primary text-uppercase">How it works</h4>
            <p className="description mt-3">
              Thank you for taking an interest in us. We're excited to have you
              on board. So here is how it works.
            </p>
            <div>
              <Badge color="info" pill className="mr-1">
                design
              </Badge>
              <Badge color="danger" pill className="mr-1">
                system
              </Badge>
              <Badge
                color="warning"
                pill
                className="mr-1"
                style={{ marginBottom: 20 }}
              >
                creative
              </Badge>
            </div>
            <ul className="list-unstyled ">
              <li className="py-1" style={{ justifyContent: "center" }}>
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="info">
                      <i class="fa fa-envelope"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-0">Create plug and get approved</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="info">
                      <i class="fas fa-calendar-alt"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-0">
                      Update plug details including your bank details
                    </h6>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="success">
                      <i class="fa fa-phone"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-0">Add products to your catalogue</h6>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="success">
                      <i class="fas fa-dollar-sign"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-0">
                      We collect the products and store them at our warehouse
                    </h6>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="success">
                      <i class="fas fa-map-marked-alt"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-0">
                      Witness everything from an elegant admin dashboard
                    </h6>
                  </div>
                </div>
              </li>
            </ul>
            <hr style={{ marginTop: 15, marginBottom: 15 }}></hr>
            <h4 className="text-primary text-uppercase">Why us</h4>
            <p className="description mt-3">
              It's simple. Responsive website, responsive team, business
              analytics, graph tools, charts, track the status of your payments
              and pending orders.We also offer features to allow you run email
              campaigns of your products to your customers etc
            </p>
            <hr style={{ marginTop: 15, marginBottom: 15 }}></hr>
            <h4 className="text-primary text-uppercase">When</h4>
            <p className="description mt-3">
              We usually approve plugs within 3 working days and you can start
              selling there after.
            </p>
            <div>
              <Badge color="info" pill className="mr-1">
                design
              </Badge>
              <Badge color="danger" pill className="mr-1">
                system
              </Badge>
              <Badge color="warning" pill className="mr-1">
                creative
              </Badge>
            </div>

            <Button
              className="mt-4"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Landing;
