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
import React, { PureComponent } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        {/* <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"> */}
        {/* Card stats */}

        <Row style={{ margin: 10, marginTop: 20 }}>
          <Col>
            <Card className="bg-gradient-success shadow-lg border-0">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h4 className="text-white">
                      We made website building easier for you.
                    </h4>
                    <p className=" text-white mt-3">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture.
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      Download React
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="bg-gradient-info shadow-lg border-0 ">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h4 className="text-white">
                      We made website building easier for you.
                    </h4>
                    <p className=" text-white ">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture.
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      Download React
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>

        {/* </div> */}
      </>
    );
  }
}

export default Header;
