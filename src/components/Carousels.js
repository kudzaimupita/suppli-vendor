import React, { PureComponent } from "react";

import {
  UncontrolledCarousel,
  NavItem,
  CardHeader,
  Card,
  CardTitle,
  CardBody,
  Button,
  CardText,
  Row,
  Col,
  Nav,
  NavLink,
} from "reactstrap";

const items = [
  {
    src: require("../assets/img/theme/profile-cover.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("../assets/img/brand/2678.png"),
    altText: "",
    caption: "rtyu",
    header: "vybhnjkm",
  },
];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <Row>
          {" "}
          <Col>
            {" "}
            <UncontrolledCarousel items={items} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Carousels;
