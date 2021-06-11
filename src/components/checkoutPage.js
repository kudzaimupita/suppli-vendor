import React from "react";

// reactstrap components
import { Button, ButtonGroup, Table } from "reactstrap";

function Example() {
  return (
    <>
      <Table className=" table-shopping" responsive>
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
        </tbody>
      </Table>
    </>
  );
}

export default Example;
