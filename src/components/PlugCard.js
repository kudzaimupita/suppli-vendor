// import React from "react";
// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   CardImg,
//   CardImgOverlay,
//   CardTitle,
//   CardText,
//   ListGroupItem,
//   ListGroup,
//   Row,
//   Col,
// } from "reactstrap";

// class Cards extends React.Component {
//   render() {
//     return (
//       <>
//         <Card className="card-profile">
//           <CardImg
//             alt="..."
//             src={require("../assets/img/brand/ururur.png")}
//             top
//             style={{ height: "8rem" }}
//           />
//           <Row className="justify-content-center">
//             <Col className="order-md-2">
//               <div className="card-profile-image">
//                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                   <img
//                     alt="..."
//                     className="avatar avatar-lg rounded-circle"
//                     src={require("../assets/img/theme/team-4.jpg")}
//                   />
//                 </a>
//               </div>
//             </Col>
//           </Row>
//           <CardHeader
//             className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
//             style={{ backgroundColor: "black" }}
//           >
//             <div className="d-flex justify-content-between">
//               <Button
//                 className="mr-4"
//                 color="success"
//                 href="#pablo"
//                 onClick={(e) => e.preventDefault()}
//                 size="sm"
//               >
//                 Check them out
//               </Button>
//               <Button
//                 className="float-right"
//                 color="default"
//                 href="#pablo"
//                 onClick={(e) => e.preventDefault()}
//                 size="sm"
//               >
//                 Follow
//               </Button>
//             </div>
//           </CardHeader>
//           <CardBody
//             className="pt-0"
//             style={{ height: "8rem", backgroundColor: "black" }}
//           >
//             <Row>
//               <div className="col">
//                 <div className="card-profile-stats d-flex justify-content-center">
//                   <div>
//                     <span className="heading">22</span>
//                     <span className="description">Friends</span>
//                   </div>
//                   <div>
//                     <span className="heading">10</span>
//                     <span className="description">Photos</span>
//                   </div>
//                   <div>
//                     <span className="heading">89</span>
//                     <span className="description">Comments</span>
//                   </div>
//                 </div>
//               </div>
//             </Row>
//             {/* <div className="text-center">
//               <h5 className="h3">
//                 Jessica Jones
//                 <span className="font-weight-light">, 27</span>
//               </h5>
//               <div className="h5 font-weight-300">
//                 <i className="ni location_pin mr-2" />
//                 Bucharest, Romania
//               </div>
//             </div> */}
//           </CardBody>
//         </Card>
//       </>
//     );
//   }
// }

// export default Cards;

import React from "react";
// reactstrap components
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

// core components

function Example() {
  return (
    <>
      <Card className="bg-dark text-white">
        <CardImg alt="..." src="..."></CardImg>
        <CardImgOverlay>
          <CardTitle tag="h4">Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>Last updated 3 mins ago</CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}
export default Example;
