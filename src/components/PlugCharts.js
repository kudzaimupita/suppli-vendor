// import React, { PureComponent } from "react";

// import { Line } from "react-chartjs-2";

// // reactstrap components
// import { Card, CardBody, Row } from "reactstrap";

// // core components
// import {
//   chartExample1,
//   // chartExample2,
//   // chartExample3,
//   // chartExample4,
// } from "../variables/charts";

// class Dashboard extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bigChartData: "data1",
//     };
//   }
//   setBgChartData = (name) => {
//     this.setState({
//       bigChartData: name,
//     });
//   };
//   render() {
//     return (
//       <>
//         <Card className="bg-default">
//           <CardBody>
//             <div className="chart">
//               {/* Chart wrapper */}
//               <Line
//                 data={chartExample1.data1}
//                 options={chartExample1.options}
//                 getDatasetAtEvent={(e) => console.log(e)}
//               />
//             </div>
//           </CardBody>
//         </Card>
//       </>
//     );
//   }
// }

// export default Dashboard;
