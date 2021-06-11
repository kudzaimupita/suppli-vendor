import React from "react";

// reactstrap components
import { Button, ButtonGroup, Table, Container } from "reactstrap";

function Example() {
  return (
    <>
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <Table className=" table-shopping align-items-center" responsive>
                <thead>
                  <tr>
                    <th className=" text-center"></th>
                    <th>Product</th>
                    <th className=" th-description">Color</th>
                    <th className=" th-description">Size</th>
                    <th className=" text-right">Price</th>
                    <th className=" text-right">Qty</th>
                    <th className=" text-right">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className=" img-container">
                        <img
                          alt="..."
                          src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/jacket.png"
                        ></img>
                      </div>
                    </td>
                    <td className=" td-name">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Spring Jacket
                      </a>
                      <br></br>
                      <small>by theNorthFace</small>
                    </td>
                    <td>Red</td>
                    <td>M</td>
                    <td className=" td-number">
                      <small>€</small>
                      549
                    </td>
                    <td className=" td-number">
                      1{" "}
                      <ButtonGroup>
                        <Button color="info" size="sm">
                          <i className=" ni ni-fat-delete"></i>
                        </Button>
                        <Button color="info" size="sm">
                          <i className=" ni ni-fat-add"></i>
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td className=" td-number">
                      <small>€</small>
                      549
                    </td>
                    <td className=" td-actions">
                      <Button
                        className=" btn-icon btn-simple"
                        color="info"
                        type="button"
                      >
                        <i className=" ni ni-fat-remove"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className=" img-container">
                        <img
                          alt="..."
                          src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/jacket.png"
                        ></img>
                      </div>
                    </td>
                    <td className=" td-name">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Spring Jacket
                      </a>
                      <br></br>
                      <small>by theNorthFace</small>
                    </td>
                    <td>Red</td>
                    <td>M</td>
                    <td className=" td-number">
                      <small>€</small>
                      549
                    </td>
                    <td className=" td-number">
                      1{" "}
                      <ButtonGroup>
                        <Button color="info" size="sm">
                          <i className=" ni ni-fat-delete"></i>
                        </Button>
                        <Button color="info" size="sm">
                          <i className=" ni ni-fat-add"></i>
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td className=" td-number">
                      <small>€</small>
                      549
                    </td>
                    <td className=" td-actions">
                      <Button
                        className=" btn-icon btn-simple"
                        color="info"
                        type="button"
                      >
                        <i className=" ni ni-fat-remove"></i>
                      </Button>
                    </td>
                    <tr>
                      <th scope="row">/argon/index.html</th>
                      <td>3,985</td>
                      <td>319</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/charts.html</th>
                      <td>3,513</td>
                      <td>294</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        36,49%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/tables.html</th>
                      <td>2,050</td>
                      <td>147</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        50,87%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/profile.html</th>
                      <td>1,795</td>
                      <td>190</td>
                      <td>
                        <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Example;
