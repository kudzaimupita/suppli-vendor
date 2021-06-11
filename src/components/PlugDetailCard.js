import React from "react";
import Rating from "@material-ui/lab/Rating";
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
  Modal,
  Form,
  FormGroup,
  Input,
  InputGroup,
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
      Follow
    </Button>
  );

  unfollowButton = (
    <Button
      className="mr-4"
      color="info"
      href="#pablo"
      onClick={() =>
        this.props.unfollowPlug(this.props.plug.doc && this.props.plug.doc._id)
      }
      size="sm"
    >
      Unfollow
    </Button>
  );
  state = {
    defaultModal: false,
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
        <Card
          className="card-profile"
          style={{ marginBottom: "30px", marginTop: "14px" }}
        >
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
                {this.props.plug.doc && this.props.plug.doc.name}
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
              {/* <Link
                to={`/plug/${this.props.plug.doc && this.props.plug.doc._id}`}
              >
                {" "}
                <Button
                  className="float-right"
                  color="default"
                  href="#pablo"
                  size="sm"
                >
                  Visit plug
                </Button>
              </Link> */}
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
              <h5 className="h3">
                <span className="font-weight-light">
                  <strong>About us</strong>
                </span>
              </h5>
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
          </CardBody>{" "}
          <CardBody className="text-center">
            <Button
              color="info"
              size="sm"
              block
              onClick={() => this.toggleModal("formModal")}
            >
              Rate us
            </Button>
          </CardBody>
          <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
          >
            <div className="modal-body p-0">
              <Card className="bg-default shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Write a review</small>
                  </div>
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <div className="text-center">
                        {" "}
                        <Rating
                          name="rating"
                          value={this.state.rating}
                          size="small"
                          precision={0.5}
                          onChange={this.handleRatingChange}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Write a review"
                          type="textarea"
                          // size="sm"
                          name="review"
                          value={this.state.review}
                          onChange={this.handleReviewChange}
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="text-center">
                      <Button
                        block
                        size="sm"
                        className="my-1"
                        color="info"
                        type="button"
                        onClick={(e) => this.onSubmit(e)}
                      >
                        Submit review
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
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
