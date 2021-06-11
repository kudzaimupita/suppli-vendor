import React, { PureComponent } from "react";
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
  render() {
    return (
      <>
        <Card className="bg-gradient-danger">
          <CardBody>
            {/* <CardTitle className="text-white" tag="h3">
              Testimonial
            </CardTitle> */}
            <blockquote className="blockquote text-white mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer text-danger">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Cards;
