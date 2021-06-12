import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";

import {
	Button,
	Card,
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
	NavItem,
} from "reactstrap";

import DemoNavbar from "../components/Navbar";
import SimpleFooter from "../components/AdminFooter";

const Login = ({ setAlert, login, loading, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		// e.preventDefault();

		login({ email, password });
	};

	const buttonSpinner = (
		<Spinner size="sm" style={{ marginRight: 6 }} color="white" />
	);

	if (isAuthenticated.isAuthenticated) {
		return <Redirect to="/" />;
	}

	const authLink = (
		<Link to="/signup">
			<NavItem className="d-none d-lg-block ml-lg-4" style={{ marginLeft: 10 }}>
				<Button
					className="btn-success btn-icon"
					color="success"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-cloud-download mr-2" />
					</span>
					<span className="nav-link-inner--text ml-1">Register</span>
				</Button>
			</NavItem>
		</Link>
	);

	return (
		<>
			<DemoNavbar authLink={authLink} />
			<main>
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
									style={{ marginBottom: 300, marginTop: 250 }}
								>
									<CardBody className="px-lg-5 py-lg-5">
										<div className="text-center text-muted mb-4">
											<small>Suppl-i Vendor Portal</small>
										</div>
										<Form role="form">
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

											<div className="text-center">
												<Button
													className="mt-4"
													color="success"
													type="button"
													onClick={() => onSubmit()}
												>
													{loading ? buttonSpinner : null} SIGN IN
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

export default connect(mapStateToProps, { setAlert, login })(Login);
