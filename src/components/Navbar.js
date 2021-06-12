import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
	Button,
	UncontrolledCollapse,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
	Media,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	NavbarBrand,
	Col,
	UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	}
	state = {
		collapseClasses: "",
		collapseOpen: false,
	};

	onExiting = () => {
		this.setState({
			collapseClasses: "collapsing-out",
		});
	};

	onExited = () => {
		this.setState({
			collapseClasses: "",
		});
	};

	render() {
		return (
			<>
				<header className="header-global">
					<Navbar
						className="navbar-main navbar-dark bg-default headroom"
						expand="lg"
						id="navbar-main"
					>
						<Container>
							<NavbarBrand to="/" xs="6">
								<img
									style={{ maxWidth: "150px" }}
									alt="..."
									src={require("../assets/img/brand/Suppli.png")}
								/>
							</NavbarBrand>
							<button className="navbar-toggler" id="navbar_global">
								<span className="navbar-toggler-icon" />
							</button>
							<UncontrolledCollapse
								toggler="#navbar_global"
								navbar
								className={this.state.collapseClasses}
								onExiting={this.onExiting}
								onExited={this.onExited}
							>
								<div className="navbar-collapse-header">
									<Row>
										<Col className="collapse-brand" xs="6">
											{/* <img
                        alt="..."
                        src={require("./assets/img/brand/argon-react.png")}
                      /> */}
										</Col>
										<Col className="collapse-close" xs="6">
											<button className="navbar-toggler" id="navbar_global">
												<span />
												<span />
											</button>
										</Col>
									</Row>
								</div>

								<Nav className="align-items-lg-center ml-lg-auto" navbar>
									<Link to="/">
										{" "}
										{/* <NavItem
											className="d-none d-lg-block ml-lg-4"
											style={{ marginLeft: 10 }}
										>
											<Button
												className="btn-1"
												color="primary"
												outline
												type="button"
											>
												<span className="btn-inner--icon">
													<i className="fa fa-cloud-download mr-2" />
												</span>
												<span className="nav-link-inner--text ml-1">
													Setup shop
												</span>
											</Button>
										</NavItem> */}
									</Link>
									{/* {this.props.authLink} */}
								</Nav>
							</UncontrolledCollapse>
						</Container>
					</Navbar>
				</header>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth,
	loading: state.auth.loading,
});

export default connect(mapStateToProps, { setAlert, register })(DemoNavbar);
