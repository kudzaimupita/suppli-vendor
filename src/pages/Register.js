import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register, facebook } from "../actions/auth";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Spinner,
  Nav,
  NavItem,
} from "reactstrap";

import DemoNavbar from "../components/Navbar";
import SimpleFooter from "../components/AdminFooter";
// ref
const Register = ({ setAlert, register, loading, isAuthenticated,facebook }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    // e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password, passwordConfirm });
    }
  };

  const onFBSubmit = async (e) => {
    // e.preventDefault();
 facebook()

  };

  const buttonSpinner = (
    <Spinner
      size="sm"
      style={{ marginRight: 6 }}
      // type="grow"
      color="white"
    />
  );

  if (isAuthenticated.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const authLink = (
    <Link to="/login">
      <NavItem className="d-none d-lg-block ml-lg-4" style={{ marginLeft: 10 }}>
        <Button
          className="btn-success btn-icon"
          color="success"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-cloud-download mr-2" />
          </span>
          <span className="nav-link-inner--text ml-1">Sign in</span>
        </Button>
      </NavItem>
    </Link>
  );

  return (
    <>
      <DemoNavbar authLink={authLink} />
      <main>
        {/* ref="main" */}
        <section
          className="section section-shaped section-lg"
          style={{
            backgroundImage: `url(${require("../assets/img/brand/background1.png")})`,
          }}
        >
          <Container className="pt-lg-4">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card
                  className="bg-secondary shadow border-0"
                  style={{ marginBottom: 30 }}
                >
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                    <Button
                          className="mt-4"
                          color="success"
                          type="button"
                       
                        onClick={() => onFBSubmit()}
                        >
                          CREATE ACCOUNT
                        </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                 
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../assets/img/icons/common/facebook.png")}
                          />
                        </span>
                        <span className="btn-inner--text">Facebook</span>
                      </Button>
                  <Button
            className="btn-neutral btn-icon ml-1"
                        color="default"
          
                        onClick={console.log(function(){
                          ("#w3s").attr("href", "http://localhost:5000/api/v1/users/google")
                        })}
                    
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                      
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    {/* <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div> */}
                    <Form role="form">
                      <FormGroup className="has-success">
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="has-success">
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={onChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Confirm password "
                            type="password"
                            autoComplete="off"
                            required
                            name="passwordConfirm"
                            value={passwordConfirm}
                            onChange={onChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-muted">
                        <small>
                          Already have an account?{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Sign in
                          </a>
                        </small>
                      </div>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="success"
                          type="button"
                          onClick={() => onSubmit()}
                        >
                          {loading ? buttonSpinner : null} CREATE ACCOUNT
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { setAlert, register, facebook })(
  Register
);
