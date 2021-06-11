import React from "react";

import {
  createPlug,
  getPlug,
  followPlug,
  unfollowPlug,
} from "../actions/plugs";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, Link } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "reactstrap";

class Cards extends React.Component {
  componentDidMount() {
    this.props.getPlug(
      this.props.product.product && this.props.product.product.plug._id
    );
  }

  followButton = (
    <Button
      className="mr-4"
      color="info"
      href="#pablo"
      onClick={() =>
        this.props.followPlug(this.props.plug.doc && this.props.plug.doc._id)
      }
      size="sm"
    >
      <i className="ni ni-fat-add"></i> Follow
    </Button>
  );

  unfollowButton = (
    <Button
      className="mr-4"
      color="primary"
      href="#pablo"
      onClick={() =>
        this.props.unfollowPlug(this.props.plug.doc && this.props.plug.doc._id)
      }
      size="sm"
    >
      <i className="ni ni-fat-remove"></i> Unfollow
    </Button>
  );
  render() {
    return (
      <>
        <Card className="card-profile" style={{ marginBottom: "30px" }}>
          <CardImg
            alt="..."
            src={require("../assets/img/brand/rsz_background1.png")}
            top
            style={{ height: "120px" }}
          />
          <CardImgOverlay
            className="d-flex align-items-center"
            style={{ paddingBottom: "160px", paddingLeft: "120px" }}
          >
            <div>
              <CardTitle className="display-4" style={{ color: "white" }}>
                {" "}
              </CardTitle>

              {/* <CardText className="text-sm font-weight-bold">
                Last updated 3 mins ago
              </CardText> */}
            </div>
          </CardImgOverlay>
          <Row className="justify-content-center">
            <Col className="order-sm-2">
              <div className="card-profile-image sm">
                <img
                  style={{ width: "80px" }}
                  alt="..."
                  className="rounded-circle md"
                  src={require("../assets/img/theme/bootstrap.jpg")}
                />
              </div>
            </Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-2 pb-0 ">
            <div className="d-flex justify-content-between">
              {this.props.plug.doc &&
              this.props.user &&
              this.props.plug.doc.followers.find(
                (follower) => follower._id === this.props.user._id
              )
                ? this.unfollowButton
                : this.followButton}
              <Link
                to={`/plug/${this.props.plug.doc && this.props.plug.doc._id}`}
              >
                <Button
                  className="float-right"
                  color="default"
                  href="#pablo"
                  size="sm"
                >
                  <i className="ni ni-spaceship"></i> Visit plug
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span className="heading">
                      {" "}
                      {this.props.plug.doc &&
                        this.props.plug.doc.products.length}
                    </span>
                    <span className="description">Products</span>
                  </div>
                  <div>
                    <span className="heading">
                      {" "}
                      {this.props.plug.doc &&
                        this.props.plug.doc.followers.length}
                    </span>
                    <span className="description">Followers</span>
                  </div>
                  <div>
                    <span className="heading">
                      {" "}
                      {this.props.plug.doc &&
                        this.props.plug.doc.ratingsAverage}
                    </span>
                    <span className="description">Rating</span>
                  </div>
                </div>
              </div>
            </Row>{" "}
            <div className="text-center">
              <h5 className="h3">
                <span className="font-weight-light">
                  <strong>
                    {" "}
                    {this.props.plug.doc && this.props.plug.doc.name}
                  </strong>
                </span>
              </h5>
              <div className="mt-3">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-facebook" />
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-dribbble" />
                </Button>
              </div>
              <h6 className="h6">
                <span className="font-weight-light">
                  <strong> About us</strong>
                </span>
              </h6>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-email-83"></i> <strong> Email</strong>:{" "}
                  {this.props.plug.doc && this.props.plug.doc.companyEmail}
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-tablet-button"></i> <strong>Phone</strong>{" "}
                  : {this.props.plug.doc && this.props.plug.doc.phone}
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-ungroup"></i>{" "}
                  <strong> Areas of focus</strong> :{" "}
                  {this.props.plug.doc &&
                    this.props.plug.doc.catergory.map(
                      (catergory) => catergory.name,
                      ","
                    )}
                </span>
              </h5>
              <h5 className="h5">
                <span className="font-weight-light">
                  <i className="ni ni-pin-3"></i> <strong> Location</strong> :{" "}
                  {/* {this.props.plug.doc.plugAddress &&
                    this.props.plug.doc.plugAddress.city}
                  ,
                  {this.props.plug.doc.plugAddress &&
                    this.props.plug.doc.plugAddress.country} */}
                </span>
              </h5>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {this.props.plug.doc && this.props.plug.doc.aboutUs}
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

Cards.defaultProps = {
  catergories: [],
  product: {},
  plug: {},
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  product: state.product.product,
  auth: state.auth.isAuthenticated,
  isAuthenticated: state.auth,
  plug: state.plug.plug,
  loading: state.auth.loading,
  createdPlugLoading: state.createdPlug.loading,
  catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {
  followPlug,
  unfollowPlug,
  setAlert,
  createPlug,
  getPlug,
})(Cards);
