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
  Nav,
  NavLink,
} from "reactstrap";

const items = [
  {
    src: require("../assets/img/brand/babyLogos.png"),
    altText: "",
    caption: "Shop by brand",
    header: "Apparel",
  },

  {
    src: require("../assets/img/brand/apparelLogos.png"),
    altText: "",
    caption: "Shop by brand",
    header: "Apparel",
  },
  {
    src: require("../assets/img/brand/designerLogos.png"),
    altText: "",
    caption: "Shop by brand",
    header: "Apparel",
  },
  {
    src: require("../assets/img/brand/electronicsLogos.png"),
    altText: "",
    caption: "Shop by brand",
    header: "Apparel",
  },
];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousels;
