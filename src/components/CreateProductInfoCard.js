/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
	Badge,
	Button,
	CardHeader,
	Card,
	CardBody,
	CardImg,
	Collapse,
	FormGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from "reactstrap";
import { useHistory, withRouter, Link } from "react-router-dom";

class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openedCollapses: ["collapseOne"],
		};
	}
	// with this function we create an array with the opened collapses
	// it is like a toggle function for all collapses from this page
	collapsesToggle = (collapse) => {
		let openedCollapses = this.state.openedCollapses;
		if (openedCollapses.includes(collapse)) {
			this.setState({
				openedCollapses: [],
			});
		} else {
			this.setState({
				openedCollapses: [collapse],
			});
		}
	};
	render() {
		return (
			<>
				<Card
					className="shadow border-0"
					style={{ alignItems: "center", marginBottom: 20 }}
				>
					<CardBody className="py-5">
						{/* <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
              <i class="fa fa-key"></i>
            </div> */}
						<h4 className="text-primary text-uppercase">Helpful info</h4>
						<p className="description mt-1">
							Here at Suppl-i we have a certain way of doing things and we
							recommend our stores adhere to these standards. This ensures
							consistency in all aspects of the platform.
						</p>

						{/* <hr style={{ marginTop: 15, marginBottom: 15 }}></hr> */}
						<CardHeader
							role="tab"
							onClick={() => this.collapsesToggle("collapseTwo")}
							aria-expanded={this.state.openedCollapses.includes("collapseTwo")}
						>
							<h5 className="mb-0">Product name</h5>
						</CardHeader>
						<Collapse
							role="tabpanel"
							isOpen={this.state.openedCollapses.includes("collapseTwo")}
						>
							<CardBody>
								<p className="description mt-3">
									{" "}
									Names should be simple, not too long, not too short.
								</p>
								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="info">
											<i class="ni ni-check-bold"></i>
										</Badge>
									</div>
									<div>
										<h6 className="mb-0">
											Iphone 11 pro max 64GB, AKG k43 Studio Headphones
										</h6>
									</div>
								</div>

								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="danger">
											<i class="ni ni-fat-remove"></i>
										</Badge>
									</div>
									<div>
										<h6 className="mb-0">
											Nike, Flip flops, A blue dress with green petals designs
										</h6>
									</div>
								</div>
							</CardBody>
						</Collapse>

						<CardHeader
							role="tab"
							onClick={() => this.collapsesToggle("collapse3")}
							aria-expanded={this.state.openedCollapses.includes("collapse3")}
						>
							<h5 className="mb-0">Brand name</h5>
						</CardHeader>
						<Collapse
							role="tabpanel"
							isOpen={this.state.openedCollapses.includes("collapse3")}
						>
							<CardBody>
								<p className="description mt-3">
									{" "}
									Brand name should be consistent throughout all your products
								</p>
								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="info">
											<i class="ni ni-check-bold"></i>
										</Badge>
									</div>
									<div>
										<h6 className="mb-0">Gucci, Adidas</h6>
									</div>
								</div>

								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="danger">
											<i class="ni ni-fat-remove"></i>
										</Badge>
									</div>
									<div>
										<h6 className="mb-0">Nike sneakers, Flip flops</h6>
									</div>
								</div>
							</CardBody>
						</Collapse>

						<CardHeader
							role="tab"
							onClick={() => this.collapsesToggle("collapse4")}
							aria-expanded={this.state.openedCollapses.includes("collapse4")}
						>
							<h5 className="mb-0">Price & Quantity in stock</h5>
						</CardHeader>
						<Collapse
							role="tabpanel"
							isOpen={this.state.openedCollapses.includes("collapse4")}
						>
							<CardBody>
								<p className="description mt-3">
									{" "}
									Product price should not include decimals, commas or fullstop.
								</p>
								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="info">
											<i class="ni ni-check-bold"></i>
										</Badge>
									</div>
									<div>
										<h6 className="mb-0">10, 65, 1999, 4300, 16499</h6>
									</div>
								</div>

								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="danger">
											<i class="ni ni-fat-remove"></i>
										</Badge>
									</div>
									<div>
										<h6 className="mb-0">12,99, 19.44, 899.99, fifty, R65</h6>
									</div>
								</div>
							</CardBody>
						</Collapse>

						<CardHeader
							role="tab"
							onClick={() => this.collapsesToggle("collapse9")}
							aria-expanded={this.state.openedCollapses.includes("collapse9")}
						>
							<h5 className="mb-0">Cover image and images</h5>
						</CardHeader>
						<Collapse
							role="tabpanel"
							isOpen={this.state.openedCollapses.includes("collapse9")}
						>
							<CardBody>
								<p className="description mt-3">
									{" "}
									Cover images and images should be clear, high in quality, and
									have a white background. *Capture angles should provide
									overview to our customers. We don't allow pictures of products
									held in hand or distracting backgrounds.
								</p>
								<div className="d-flex align-items-center">
									<div>
										<Badge className="badge-circle mr-3" color="info">
											<i class="ni ni-check-bold"></i>
										</Badge>
									</div>
									<div>
										<a
											className="avatar"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<img
												alt="..."
												src={require("../assets/img/theme/team-4.jpg")}
											/>
										</a>
									</div>
								</div>
							</CardBody>
						</Collapse>

						<CardHeader
							role="tab"
							onClick={() => this.collapsesToggle("collapse6")}
							aria-expanded={this.state.openedCollapses.includes("collapse6")}
						>
							<h5 className="mb-0">Description</h5>
						</CardHeader>
						<Collapse
							role="tabpanel"
							isOpen={this.state.openedCollapses.includes("collapse6")}
						>
							<CardBody>
								<p className="description mt-3">
									A description is compulsory. Please add as much info as
									possible related to the product. this allows for better search
									optimisation.
								</p>
							</CardBody>
						</Collapse>

						<CardHeader
							role="tab"
							onClick={() => this.collapsesToggle("collapse5")}
							aria-expanded={this.state.openedCollapses.includes("collapse5")}
						>
							<h5 className="mb-0"> Colors, Sizes & Tags</h5>
						</CardHeader>
						<Collapse
							role="tabpanel"
							isOpen={this.state.openedCollapses.includes("collapse5")}
						>
							<CardBody>
								<p className="description mt-3">
									If a product varies with size and color please add those
									attributes. After typing the color or size and press enter.
									The same goes for tags, which are an extra layer to fully
									optimise searches.
								</p>
							</CardBody>
						</Collapse>

						{/* <Link to="/help">
							{" "}
							<Button
								className="mt-4"
								color="info"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
							>
								Learn more
							</Button>
						</Link> */}
					</CardBody>
				</Card>
			</>
		);
	}
}

export default Landing;
