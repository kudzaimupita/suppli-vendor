import React, { PureComponent } from "react";
import { connect, MapStateToProps } from "react-redux";
import { useHistory, Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  ButtonGroup,
  Col,
} from "reactstrap";
import classNames from "classnames";

import { getProducts } from "../actions/products";
import { addItem } from "../actions/cart";
import RatingStars from "./RatingStars";
import WishlistIcon from "../components/WishlistIcon";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";

class ProductCard extends React.Component {
  wasButton = (
    <Button
      color="danger"
      type="button"
      // onClick={this.props.clearCart}
      size="sm"
      className="h5"
    >
      <h5
        className="h5"
        style={{ color: "white", padding: "0px" }}
        style={{ marginBottom: "0px" }}
      >
        <span
          className="font-weight-light"
          style={{ marginBottom: "0px", marginTop: "0px" }}
          style={{ color: "white" }}
        >
          <strike>
            R{"  "}
            {this.props.product.was && this.props.product.was}
          </strike>
        </span>
      </h5>{" "}
      <h5
        className="h6"
        style={{ color: "white", padding: "0px" }}
        style={{ marginBottom: "0px", marginTop: "0px" }}
      >
        <span
          className="font-weight-light"
          style={{ padding: 0 }}
          style={{ color: "white" }}
        >
          <i class="fa fa-tags"></i> Now
        </span>
      </h5>{" "}
      <h4 style={{ color: "white", padding: "0px", marginTop: "0px" }}>
        {" "}
        R{this.props.product.price}
      </h4>
    </Button>
  );

  noWasButton = (
    <Button
      color="info"
      type="button"
      // onClick={this.props.clearCart}
      size="sm"
      className="h5"
    >
      <h5
        className="h6"
        style={{ color: "white", padding: "0px" }}
        style={{ marginBottom: "0px", marginTop: "0px" }}
      >
        <span
          className="font-weight-light"
          style={{ padding: 0 }}
          style={{ color: "white" }}
        >
          <i class="fa fa-tags"></i> Only
        </span>
      </h5>{" "}
      <h4 style={{ color: "white", padding: "0px", marginTop: "0px" }}>
        {" "}
        R{this.props.product.price}
      </h4>
    </Button>
  );

  render() {
    return (
      <>
        {" "}
        <Card
          key={this.props.product._id}
          className="card-lift--hover shadow border-0"
        >
          {" "}
          {/* <FavoriteBorderRoundedIcon style={{ color: "#11cdef" }} /> */}
          {/* <Button
              className="btn-icon-only rounded-circle"
              color="info"
              type="button"
              size="sm"
            >
              <span className="btn-inner--icon">
                <i className="ni ni-favourite-28"></i>
              </span>
            </Button> */}
          <div
            style={{
              position: "absolute",
              // top: "8px",
              left: "145px",
              // zIndex: 100,
            }}
          >
            {this.props.product.was ? this.wasButton : this.noWasButton}

            {/* <h4 style={{ color: "white" }}>R{this.props.product.price}</h4> */}
          </div>
          <Link to={`/product/${this.props.product._id}`}>
            {" "}
            <img
              className="imgCardTop"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "12rem",
              }}
              src={require("../assets/img/theme/jordan.jpeg")}
              // src={this.props.product.imageCover}
            />{" "}
          </Link>
          <CardBody>
            <Link to={`/product/${this.props.product._id}`}>
              <Row style={{ justifyContent: "center" }}>
                {" "}
                <Link to={`/product/${this.props.product._id}`}>
                  {" "}
                  <h3 className="description " style={{ textAlign: "center" }}>
                    <strong>{this.props.product.name}</strong>
                  </h3>
                </Link>
              </Row>
              <Row style={{ justifyContent: "center" }}>
                {" "}
                <RatingStars rating={this.props.product.ratingsAverage} />
                <h6>({this.props.product.ratingsAverage})</h6>
              </Row>
            </Link>
            <Row style={{ marginTop: 10 }}>
              {" "}
              {/* <Button
                  block
                  color="default"
                  href="#pablo"
                  onClick={() => this.props.addItem(this.props.product)}
                  size="sm"
                >
                  {"  "}Add to cart{" "}
                </Button> */}
              <Col xl="12" sm="12" xs="12">
                {" "}
                <ButtonGroup className="btn-group-toggle ">
                  <Button
                    tag="label"
                    className={classNames("btn-simple")}
                    color="default"
                    id="0"
                    size="sm"
                    onClick={() => this.props.addItem(this.props.product)}
                  >
                    Add to cart
                  </Button>
                  <Button
                    color="default"
                    id="1"
                    size="sm"
                    outline
                    tag="label"
                    className={classNames("btn-simple")}
                  >
                    <i
                      className="ni ni-favourite-28 "
                      style={{ color: "#ffccbb" }}
                      outline
                    ></i>{" "}
                    Wishlist
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.orders,
});

export default connect(mapStateToProps, { getProducts, addItem })(ProductCard);
