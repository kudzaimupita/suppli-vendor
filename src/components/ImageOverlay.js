import React from "react";

// reactstrap components
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

function Example() {
  return (
    <>
      <Card className=" bg-dark text-white border-0">
        <CardImg
          alt="..."
          src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
        ></CardImg>
        <CardImgOverlay className=" d-flex align-items-center">
          <div>
            <CardTitle className=" h2 text-white mb-2">Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText className=" text-sm font-weight-bold">
              Last updated 3 mins ago
            </CardText>
          </div>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default Example;
