// import React from "react";

// // reactstrap components
// import {
//   Card,
//   NavItem,
//   NavLink,
//   Nav,
//   TabContent,
//   TabPane,
//   Row,
//   Col,
//   CardBody,
//   Badge,
//   Button,
//   ListGroupItem,
//   ListGroup,
//   Progress,
// } from "reactstrap";

// // Core Components

// function Example() {
//   const [hTabs3, setHTabs3] = React.useState("hTabs3-3");
//   const [vTabs3, setVTabs3] = React.useState("vTabs3-1");
//   return (
//     <>
//       <Row>
//         <Col className="mb-5" md="6" xs="6 " style={{ paddingRight: "0" }}>
//           <ListGroup>
//             <ListGroupItem
//               className="list-group-item-action justify-content-betwee align-items-center  "
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               tag="a"
//             >
//               <i className="ni ni-user-run" /> Fashion & Apparel
//             </ListGroupItem>
//             <ListGroupItem
//               className="list-group-item-action "
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               tag="a"
//             >
//               <i className="ni ni-user-run" /> Toys & Hobbies
//             </ListGroupItem>
//             <ListGroupItem
//               className="list-group-item-action "
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               tag="a"
//             >
//               <i className="ni ni-user-run" /> Mother & Baby
//             </ListGroupItem>
//             <ListGroupItem
//               className="list-group-item-action"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               tag="a"
//             >
//               Sports & Fitness
//             </ListGroupItem>
//             <ListGroupItem
//               className="list-group-item-action disabled"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               tag="a"
//             >
//               Consumer electronics
//             </ListGroupItem>
//             <ListGroupItem
//               className="list-group-item-action disabled"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//               tag="a"
//             >
//               Automotive
//             </ListGroupItem>
//           </ListGroup>
//         </Col>
//         <Col md="6" xs="6" style={{ paddingLeft: "0" }}>
//           {" "}
//           <ListGroup>
//             <ListGroupItem className="active">Cras justo odio</ListGroupItem>
//             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//             <ListGroupItem>Morbi leo risus</ListGroupItem>
//             <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
//             <ListGroupItem>Vestibulum at eros</ListGroupItem>
//             <ListGroupItem>Vestibulum at eros</ListGroupItem>
//           </ListGroup>
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default Example;

// import React from "react";
// import { Card, Modal, Upload } from "antd";

// class UploadPicture extends React.Component {
//   state = {
//     previewVisible: false,
//     previewImage: "",
//     fileList: [
//       {
//         uid: -1,
//         name: "xxx.png",
//         status: "done",
//         url:
//           "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//       },
//     ],
//   };

//   handleCancel = () => this.setState({ previewVisible: false });

//   handlePreview = (file) => {
//     this.setState({
//       previewImage: file.url || file.thumbUrl,
//       previewVisible: true,
//     });
//   };

//   handleChange = ({ fileList }) => this.setState({ fileList });

//   render() {
//     const { previewVisible, previewImage, fileList } = this.state;
//     const uploadButton = (
//       <div>
//         {/* <Icon type="plus" /> */}
//         <div className="ant-upload-text">Upload</div>
//       </div>
//     );
//     return (
//       <Card title="UploadPicture" className="gx-card clearfix">
//         <Upload
//           action="//jsonplaceholder.typicode.com/posts/"
//           listType="picture-card"
//           fileList={fileList}
//           onPreview={this.handlePreview}
//           onChange={this.handleChange}
//         >
//           {fileList.length >= 3 ? null : uploadButton}
//         </Upload>
//         <Modal
//           visible={previewVisible}
//           footer={null}
//           onCancel={this.handleCancel}
//         >
//           <img alt="example" style={{ width: "100%" }} src={previewImage} />
//         </Modal>
//       </Card>
//     );
//   }
// }

// export default UploadPicture;
import React from "react";

// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   CustomInput,
//   Progress,
// } from "reactstrap";
// import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
// import { Wizard, Steps, Step } from "react-albus";

// // import PageTitle from '../../components/PageTitle';

// const BasicWizard = () => {
//   return (
//     <Card>
//       <CardBody>
//         <h4 className="header-title mt-0 mb-1">Basic wizard</h4>
//         <p className="sub-header">Example of Basic wizard</p>

//         <Wizard>
//           <Steps>
//             <Step
//               id="login"
//               render={({ next }) => (
//                 <Form>
//                   <FormGroup row>
//                     <Label for="exampleEmail" md={3}>
//                       Email
//                     </Label>
//                     <Col md={9}>
//                       <Input
//                         type="email"
//                         name="email"
//                         id="exampleEmail"
//                         placeholder="enter email"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="examplePassword" md={3}>
//                       Password
//                     </Label>
//                     <Col md={9}>
//                       <Input
//                         type="password"
//                         name="password"
//                         id="examplePassword"
//                         placeholder="password placeholder"
//                         defaultValue="12345"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="examplerePassword" md={3}>
//                       Re-Password
//                     </Label>
//                     <Col md={9}>
//                       <Input
//                         type="password"
//                         name="repassword"
//                         id="examplerePassword"
//                         placeholder="password"
//                         defaultValue="12345"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <ul className="list-inline wizard mb-0">
//                     <li className="next list-inline-item float-right">
//                       <Button onClick={next} color="success">
//                         Next
//                       </Button>
//                     </li>
//                   </ul>
//                 </Form>
//               )}
//             />
//             <Step
//               id="gandalf"
//               render={({ next, previous }) => (
//                 <Form>
//                   <FormGroup row>
//                     <Label for="fname" md={3}>
//                       First Name
//                     </Label>
//                     <Col md={9}>
//                       <Input
//                         type="text"
//                         name="fname"
//                         id="fname"
//                         placeholder="Enter first name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="lname" md={3}>
//                       Last Name
//                     </Label>
//                     <Col md={9}>
//                       <Input
//                         type="text"
//                         name="lname"
//                         id="lname"
//                         placeholder="enter last name"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="phone" md={3}>
//                       Phone Number
//                     </Label>
//                     <Col md={9}>
//                       <Input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         placeholder="enter phone number"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <ul className="list-inline wizard mb-0">
//                     <li className="previous list-inline-item">
//                       <Button onClick={previous} color="info">
//                         Previous
//                       </Button>
//                     </li>
//                     <li className="next list-inline-item float-right">
//                       <Button onClick={next} color="success">
//                         Next
//                       </Button>
//                     </li>
//                   </ul>
//                 </Form>
//               )}
//             />
//             <Step
//               id="dumbledore"
//               render={({ previous }) => (
//                 <Row>
//                   <Col sm={12}>
//                     <div className="text-center">
//                       <h2 className="mt-0">
//                         <i className="mdi mdi-check-all"></i>
//                       </h2>
//                       <h3 className="mt-0">Thank you !</h3>

//                       <p className="w-75 mb-2 mx-auto">
//                         Quisque nec turpis at urna dictum luctus. Suspendisse
//                         convallis dignissim eros at volutpat. In egestas mattis
//                         dui. Aliquam mattis dictum aliquet.
//                       </p>

//                       <div className="mb-3">
//                         <CustomInput
//                           type="checkbox"
//                           id="exampleCustomCheckbox"
//                           label="I agree with the Terms and Conditions"
//                         />
//                       </div>
//                     </div>
//                   </Col>

//                   <Col sm={12}>
//                     <ul className="list-inline wizard mb-0">
//                       <li className="previous list-inline-item">
//                         <Button onClick={previous} color="info">
//                           Previous
//                         </Button>
//                       </li>

//                       <li className="next list-inline-item float-right">
//                         <Button color="success">Submit</Button>
//                       </li>
//                     </ul>
//                   </Col>
//                 </Row>
//               )}
//             />
//           </Steps>
//         </Wizard>
//       </CardBody>
//     </Card>
//   );
// };

// const WizardWithProgressbar = () => {
//   return (
//     <Card>
//       <CardBody>
//         <h4 className="header-title mt-0 mb-1">Wizard with Progress bar</h4>
//         <p className="sub-header">Example of wizard with progress bar</p>

//         <Wizard
//           render={({ step, steps }) => (
//             <React.Fragment>
//               <Progress
//                 animated
//                 striped
//                 color="success"
//                 value={((steps.indexOf(step) + 1) / steps.length) * 100}
//                 className="mb-3 progress-sm"
//               />

//               <Steps>
//                 <Step
//                   id="login"
//                   render={({ next }) => (
//                     <Form>
//                       <FormGroup row>
//                         <Label for="exampleEmail1" md={3}>
//                           Email
//                         </Label>
//                         <Col md={9}>
//                           <Input
//                             type="email"
//                             name="email"
//                             id="exampleEmail1"
//                             placeholder="enter email"
//                           />
//                         </Col>
//                       </FormGroup>

//                       <FormGroup row>
//                         <Label for="examplePassword1" md={3}>
//                           Password
//                         </Label>
//                         <Col md={9}>
//                           <Input
//                             type="password"
//                             name="password"
//                             id="examplePassword1"
//                             placeholder="password placeholder"
//                             defaultValue="12345"
//                           />
//                         </Col>
//                       </FormGroup>

//                       <FormGroup row>
//                         <Label for="examplerePassword1" md={3}>
//                           Re-Password
//                         </Label>
//                         <Col md={9}>
//                           <Input
//                             type="password"
//                             name="repassword"
//                             id="examplerePassword1"
//                             placeholder="password"
//                             defaultValue="12345"
//                           />
//                         </Col>
//                       </FormGroup>

//                       <ul className="list-inline wizard mb-0">
//                         <li className="next list-inline-item float-right">
//                           <Button onClick={next} color="success">
//                             Next
//                           </Button>
//                         </li>
//                       </ul>
//                     </Form>
//                   )}
//                 />
//                 <Step
//                   id="gandalf"
//                   render={({ next, previous }) => (
//                     <Form>
//                       <FormGroup row>
//                         <Label for="fname1" md={3}>
//                           First Name
//                         </Label>
//                         <Col md={9}>
//                           <Input
//                             type="text"
//                             name="fname"
//                             id="fname1"
//                             placeholder="Enter first name"
//                           />
//                         </Col>
//                       </FormGroup>

//                       <FormGroup row>
//                         <Label for="lname1" md={3}>
//                           Last Name
//                         </Label>
//                         <Col md={9}>
//                           <Input
//                             type="text"
//                             name="lname"
//                             id="lname1"
//                             placeholder="enter last name"
//                           />
//                         </Col>
//                       </FormGroup>

//                       <FormGroup row>
//                         <Label for="phone1" md={3}>
//                           Phone Number
//                         </Label>
//                         <Col md={9}>
//                           <Input
//                             type="text"
//                             name="phone"
//                             id="phone1"
//                             placeholder="enter phone number"
//                           />
//                         </Col>
//                       </FormGroup>

//                       <ul className="list-inline wizard mb-0">
//                         <li className="previous list-inline-item">
//                           <Button onClick={previous} color="info">
//                             Previous
//                           </Button>
//                         </li>
//                         <li className="next list-inline-item float-right">
//                           <Button onClick={next} color="success">
//                             Next
//                           </Button>
//                         </li>
//                       </ul>
//                     </Form>
//                   )}
//                 />
//                 <Step
//                   id="dumbledore"
//                   render={({ previous }) => (
//                     <Row>
//                       <Col sm={12}>
//                         <div className="text-center">
//                           <h2 className="mt-0">
//                             <i className="mdi mdi-check-all"></i>
//                           </h2>
//                           <h3 className="mt-0">Thank you !</h3>

//                           <p className="w-75 mb-2 mx-auto">
//                             Quisque nec turpis at urna dictum luctus.
//                             Suspendisse convallis dignissim eros at volutpat. In
//                             egestas mattis dui. Aliquam mattis dictum aliquet.
//                           </p>

//                           <div className="mb-3">
//                             <CustomInput
//                               type="checkbox"
//                               id="exampleCustomCheckbox1"
//                               label="I agree with the Terms and Conditions"
//                             />
//                           </div>
//                         </div>
//                       </Col>

//                       <Col sm={12}>
//                         <ul className="list-inline wizard mb-0">
//                           <li className="previous list-inline-item">
//                             <Button onClick={previous} color="info">
//                               Previous
//                             </Button>
//                           </li>

//                           <li className="next list-inline-item float-right">
//                             <Button color="success">Submit</Button>
//                           </li>
//                         </ul>
//                       </Col>
//                     </Row>
//                   )}
//                 />
//               </Steps>
//             </React.Fragment>
//           )}
//         />
//       </CardBody>
//     </Card>
//   );
// };

// const WizardWithFormValidation = () => {
//   return (
//     <Card>
//       <CardBody>
//         <h4 className="header-title mt-0 mb-1">Wizard with Validation</h4>
//         <p className="sub-header">Example of wizard with Validation</p>

//         <Wizard
//           render={({ step, steps }) => (
//             <React.Fragment>
//               <Progress
//                 animated
//                 striped
//                 color="success"
//                 value={((steps.indexOf(step) + 1) / steps.length) * 100}
//                 className="mb-3 progress-sm"
//               />

//               <Steps>
//                 <Step
//                   id="login"
//                   render={({ next }) => (
//                     <AvForm
//                       onValidSubmit={(event, values) => {
//                         next();
//                       }}
//                     >
//                       <AvField
//                         name="username"
//                         label="Username/Email"
//                         type="text"
//                         required
//                       />
//                       <AvField
//                         name="password"
//                         label="Password"
//                         type="password"
//                         required
//                       />

//                       <FormGroup>
//                         <AvInput
//                           tag={CustomInput}
//                           type="checkbox"
//                           name="customCheckbox"
//                           label="Remember me"
//                         />
//                       </FormGroup>

//                       <ul className="list-inline wizard mb-0">
//                         <li className="next list-inline-item float-right">
//                           <Button color="success" type="submit">
//                             Next
//                           </Button>
//                         </li>
//                       </ul>
//                     </AvForm>
//                   )}
//                 />
//                 <Step
//                   id="gandalf"
//                   render={({ next, previous }) => (
//                     <AvForm
//                       onValidSubmit={(event, values) => {
//                         next();
//                       }}
//                     >
//                       <AvField
//                         name="firstname"
//                         label="First Name"
//                         type="text"
//                         required
//                       />
//                       <AvField
//                         name="lastname"
//                         label="Last Name"
//                         type="text"
//                         required
//                       />

//                       <FormGroup>
//                         <AvInput
//                           tag={CustomInput}
//                           type="checkbox"
//                           name="customCheckbox"
//                           label="Agree to terms and conditions"
//                           required
//                         />
//                       </FormGroup>

//                       <ul className="list-inline wizard mb-0">
//                         <li className="previous list-inline-item">
//                           <Button onClick={previous} color="info">
//                             Previous
//                           </Button>
//                         </li>
//                         <li className="next list-inline-item float-right">
//                           <Button color="success" type="submit">
//                             Next
//                           </Button>
//                         </li>
//                       </ul>
//                     </AvForm>
//                   )}
//                 />
//                 <Step
//                   id="dumbledore"
//                   render={({ previous }) => (
//                     <Row>
//                       <Col sm={12}>
//                         <div className="text-center">
//                           <h2 className="mt-0">
//                             <i className="mdi mdi-check-all"></i>
//                           </h2>
//                           <h3 className="mt-0">Thank you !</h3>

//                           <p className="w-75 mb-2 mx-auto">
//                             Quisque nec turpis at urna dictum luctus.
//                             Suspendisse convallis dignissim eros at volutpat. In
//                             egestas mattis dui. Aliquam mattis dictum aliquet.
//                           </p>

//                           <div className="mb-3">
//                             <CustomInput
//                               type="checkbox"
//                               id="exampleCustomCheckbox2"
//                               label="I agree with the Terms and Conditions"
//                             />
//                           </div>
//                         </div>
//                       </Col>

//                       <Col sm={12}>
//                         <ul className="list-inline wizard mb-0">
//                           <li className="previous list-inline-item">
//                             <Button onClick={previous} color="info">
//                               Previous
//                             </Button>
//                           </li>

//                           <li className="next list-inline-item float-right">
//                             <Button color="success">Submit</Button>
//                           </li>
//                         </ul>
//                       </Col>
//                     </Row>
//                   )}
//                 />
//               </Steps>
//             </React.Fragment>
//           )}
//         />
//       </CardBody>
//     </Card>
//   );
// };

// const FormWizard = () => {
//   return (
//     <React.Fragment>
//       <Row className="page-title">
//         <Col md={12}>
//           {/* <PageTitle
//             breadCrumbItems={[
//               { label: "Forms", path: "/forms/wizard" },
//               { label: "Form Wizard", path: "/forms/wizard", active: true },
//             ]}
//             title={"Form Wizard"}
//           /> */}
//         </Col>
//       </Row>

//       <Row>
//         <Col xl={6}>
//           <BasicWizard />
//         </Col>

//         <Col xl={6}>
//           <WizardWithProgressbar />
//         </Col>
//       </Row>

//       <Row>
//         <Col lg={6}>
//           <WizardWithFormValidation />
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default FormWizard;

import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export default class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
