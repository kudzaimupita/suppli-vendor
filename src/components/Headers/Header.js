/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import NavUserDropdown from "../../components/NavUserDropdown";
import { getCatergories } from "../../actions/catergories";
import { loadMyPlug } from "../../actions/auth";
import { getProductStats } from "../../actions/products";
import {
	getPlugStats,
	getDueAmount,
	getPlugDailyStats,
} from "../../actions/plugs";
import { Avatar, List, Statistic, Card } from "antd";
// reactstrap components
import { CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
	componentWillMount() {
		this.props.getPlugStats();
		this.props.getDueAmount();
		this.props.getPlugDailyStats();
		this.props.getProductStats();
	}
	render() {
		console.log(
			this.props.productStats?.productStats &&
				this.props.productStats?.productStats.toString()
		);
		return (
			<>
				<div
					className="header  pb-8 pt-5 pt-md-6"
					style={{
						backgroundImage: `url(${require("../../assets/img/theme/back.png")})`,
					}}
				>
					<Container fluid>
						<div className="header-body">
							{/* Card stats */}
							<Row>
								<Col lg="6" xl="3">
									<Card
										// className=" shadow border-0"
										className="bg-dark card-stats mb-4 mb-xl-0"
										color="default"
									>
										<CardBody>
											<Row>
												<div className="col">
													<CardTitle
														tag="h5"
														className="text-uppercase text-muted mb-0"
													>
														Catalogue
													</CardTitle>
													<span
														className="h2 font-weight-bold mb-0"
														style={{ color: "white" }}
													>
														{this.props.myPlug?.products &&
															this.props.myPlug?.products?.length}
													</span>
												</div>
												<Col className="col-auto">
													<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
														<i className="ni ni-bag-17"></i>
													</div>
												</Col>
											</Row>
											<p className="mt-3 mb-0 text-muted text-sm">
												<span className="text-secondary mr-2">
                                                    {this.props.productStats && this.props.productStats?.productStats 
														? this.props.productStats?.productStats?.toString()
														: 0}{" "}
													products
												</span>

												<span
													className="text-nowrap"
													style={{ fontSize: "11px" }}
												>
													Since 24hrs ago
												</span>
											</p>
										</CardBody>
									</Card>
								</Col>
								<Col lg="6" xl="3">
									<Card
										className="bg-dark card-stats mb-4 mb-xl-0"
										color="default"
									>
										<CardBody>
											<Row>
												<div className="col">
													<CardTitle
														tag="h5"
														className="text-uppercase text-muted mb-0"
													>
														Products sold
													</CardTitle>
													<span
														className="h2 font-weight-bold mb-0"
														style={{ color: "white" }}
													>
														{" "}
														{this.props.plugStats?.plugSales
															? this.props.plugStats?.totalSales
															: 0}
													</span>
												</div>
												<Col className="col-auto">
													<div className="icon icon-shape bg-success text-white rounded-circle shadow">
														{" "}
														<i className="ni ni-collection"></i>
													</div>
												</Col>
											</Row>
											<p className="mt-3 mb-0 text-muted text-sm">
												<span className="text-info mr-2">
													{this.props.dailyStats?.plugDailyStats
														? this.props.dailyStats?.plugDailyStats?.totalSales
														: 0}{" "}
													sales
												</span>{" "}
												<span
													className="text-nowrap"
													style={{ fontSize: "11px" }}
												>
													Since 24hrs ago
												</span>
											</p>
										</CardBody>
									</Card>
								</Col>
								<Col lg="6" xl="3">
									<Card
										className="bg-dark card-stats mb-4 mb-xl-0"
										color="default"
									>
										<CardBody>
											<Row>
												<div className="col">
													<CardTitle
														tag="h5"
														className="text-uppercase text-muted mb-0"
													>
														Total Revenue
													</CardTitle>
													<span
														className="h5 font-weight-bold mb-0"
														style={{ color: "white" }}
													>
														{" "}
														{this.props.plugStats?.totalRevenue
															? new Intl.NumberFormat("de-ZA", {
																	style: "currency",
																	currency: "ZAR",
															  }).format(this.props.plugStats?.totalRevenue)
															: 0}
													</span>
												</div>
												<Col className="col-auto">
													<div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
														<i className="ni ni-money-coins"></i>
													</div>
												</Col>
											</Row>
											<p className="mt-3 mb-0 text-muted text-sm">
												<span className="text-success mr-2">
													{this.props.dailyStats?.plugDailyStats
														? new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
														  }).format(
																this.props.dailyStats?.plugDailyStats
																	.totalRevenue
														  )
														: 0}
												</span>{" "}
												<span
													className="text-nowrap"
													style={{ fontSize: "11px" }}
												>
													Since 24hrs ago
												</span>
											</p>
										</CardBody>
									</Card>
								</Col>

								<Col lg="6" xl="3">
									<Card
										className="bg-dark card-stats mb-4 mb-xl-0"
										color="default"
									>
										<CardBody>
											<Row>
												<div className="col">
													<CardTitle
														tag="h5"
														className="text-uppercase  text-muted mb-0"
													>
														Pending payment
													</CardTitle>
													<span
														className="h4 font-weight-bold mb-0"
														color="white"
														style={{ color: "white" }}
													>
														{this.props.amountDue
															? new Intl.NumberFormat("de-ZA", {
																	style: "currency",
																	currency: "ZAR",
															  }).format(this.props.amountDue?.amountDue)
															: 0}
													</span>
												</div>
												<Col className="col-auto">
													{" "}
													<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
														{" "}
														<i className="ni ni-credit-card"></i>
													</div>
												</Col>{" "}
											</Row>
											<p className="mt-3 mb-0 text-muted text-sm">
												{/* <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "} */}
												<span
													className="text-nowrap"
													style={{ fontSize: "11px" }}
												>
													{this.props.amountDue !== 0
														? " Orders awaiting fullfillment"
														: "No orders awaiting fullfillment"}
												</span>
											</p>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</>
		);
	}
}
Header.defaultProps = {
	catergories: [],
	myPlug: {},
	plugStats: {},
	dailyStats: {},
	productStats: {},
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	dailyStats: state.plugDailyStats,
	isAuthenticated: state.auth,
	cartItems: state.cart.cartItems,
	myPlug: state.myPlug.plug,
	plugStats: state.plugSales.orders,
	productStats: state.productStats,

	amountDue: state.unBalancedSales.stats,
});

export default connect(mapStateToProps, {
	logout,
	loadMyPlug,
	getPlugStats,
	getCatergories,
	getDueAmount,
	getPlugDailyStats,
	getProductStats,
})(Header);
