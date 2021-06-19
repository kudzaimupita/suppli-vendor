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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import { Doughnut, Pie, Polar, HorizontalBar } from "react-chartjs-2";
import { Line, Bar, Scatter, Bubble } from "react-chartjs-2";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import NavUserDropdown from "../components/NavUserDropdown";
import { getCatergories } from "../actions/catergories";
import { loadMyPlug,loadUser } from "../actions/auth";
import {
    getPlugStats, getPlugWeeklyStats, getDueAmount,
    getPlugDailyStats, } from "../actions/plugs";
import Loader from "../components/Spinner";
import { Avatar, List, Statistic, Card } from "antd";
// reactstrap components
import {
	ListGroup,
	ListGroupItem,
	Button,
	CardHeader,
	CardBody,
	NavItem,
	NavLink,
	Nav,
	Progress,
	Table,
	Container,
	Row,
	Badge,
	Col,
	CardTitle,
} from "reactstrap";
import { getProductStats } from "../actions/products";
// core components
import {
	chartOptions,
	parseOptions,
	chartExample1,
	chartExample2,
} from "../variables/charts";

import Header from "../components/Headers/Header";
import { getOrdersList } from "../reducers/orderReducer";

class Index extends React.Component {
	componentDidMount() {
        this.props.getProductStats();
        this.props.getDueAmount();
        this.props.getPlugDailyStats();
        this.props.getProductStats();
        // this.props.loadMyPlug()
        this.props.getPlugStats();
        this.props.getPlugWeeklyStats()
	}
	constructor(props) {
		super(props);
		this.state = {
			activeNav: 1,
			chartExample1Data: "data1",
		};
		if (window.Chart) {
			parseOptions(Chart, chartOptions());
		}
	}
	toggleNavs = (e, index) => {
		e.preventDefault();
		this.setState({
			activeNav: index,
			chartExample1Data:
				this.state.chartExample1Data === "data1" ? "data2" : "data1",
		});
	};
	city = {
		title: {
			display: true,
			text: "Sales by city",
		},
		legend: {
			display: true,
		},
		indexLabelPlacement: "outside",
	};
	country = {
		title: {
			display: true,
			text: "Sales by country",
		},
		legend: {
			display: true,
		},
		indexLabelPlacement: "outside",
	};
	catergory = {
		title: {
			display: true,
			text: "Sales by catergory",
		},
	};
	colors = {
		gray: {
			100: "#f6f9fc",
			200: "#e9ecef",
			300: "#dee2e6",
			400: "#ced4da",
			500: "#adb5bd",
			600: "#8898aa",
			700: "#525f7f",
			800: "#32325d",
			900: "#212529",
		},
		theme: {
			default: "#172b4d",
			primary: "#5e72e4",
			secondary: "#f4f5f7",
			info: "#11cdef",
			success: "#2dce89",
			danger: "#f5365c",
			warning: "#fb6340",
		},
		black: "#12263F",
		white: "#FFFFFF",
		transparent: "transparent",
	};

	chartExample1 = {
		options: {
			scales: {
				yAxes: [
					{
						gridLines: {
							color: this.colors.gray[900],
							zeroLineColor: this.colors.gray[900],
						},
						ticks: {
							callback: function (value) {
								if (!(value % 10)) {
									return "" + value + "";
								}
							},
						},
					},
				],
			},
			tooltips: {
				callbacks: {
					label: function (item, data) {
                        var label = data.datasets[item.datasetIndex] && data.datasets[item.datasetIndex].label || "";
						var yLabel = item.yLabel;
						var content = "";

						if (data.datasets.length > 1) {
							content += label;
						}

						content += "R" + yLabel + "";
						return content;
					},
				},
			},
		},
		data1: (canvas) => {
			return {
				labels: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
				datasets: [
					{
						label: "Performance",
						data: [
							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 0)
									.map((sale) => sale.price)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 1)
									.map((sale) => sale.price)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 2)
									.map((sale) => sale.price)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 3)
									.map((sale) => sale.price)
									.toString(),

							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 4)
									.map((sale) => sale.price)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 5)
									.map((sale) => sale.price)
									.toString(),

							this.props.info &&
								this.props.info?.groupedByRevenueSales &&
								this.props.info?.groupedByRevenueSales
									.filter((sale) => sale.day == 6)
									.map((sale) => sale.price)
									.toString(),
						],
					},
				],
			};
		},
		data4: (canvas) => {
			return {
				labels:
					this.props.stats &&
					this.props.stats?.ordersByCountry &&
					this.props.stats?.ordersByCountry?.map((country) =>
						JSON.stringify(country._id)
					),

				datasets: [
					{
						label: "Performance",
						backgroundColor: [
							"#3e95cd",
							"#8e5ea2",
							"#3cba9f",
							"#e8c3b9",
							"#c45850",
							"#3e95cd",
							"#8e5ea2",
							"#fb6340",
							"#11cdef",
							"#2dce89",
							"#f5365c",
						],
						data:
							(this.props.stats &&
								this.props.stats?.ordersByCountry &&
								this.props.stats?.ordersByCountry?.map((country) =>
									JSON.stringify(country.total)
								)) ||
							[],
					},
				],
			};
		},

		data3: (canvas) => {
			return {
				labels:
					this.props.stats &&
					this.props.stats.ordersByCity &&
					this.props.stats.ordersByCity
						.slice(0.5)
						.map((city) => JSON.stringify(city._id)),

				datasets: [
					{
						label: "orders",
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#c45850",
							"#3e95cd",
							"#8e5ea2",
							"#3cba9f",
							"#fb6340",
							"#11cdef",
							"#2dce89",
							"#f5365c",
						],
						data:
							(this.props.stats &&
								this.props.stats?.ordersByCity &&
								this.props.stats?.ordersByCity
									.slice(0.5)
									.map((city) => JSON.stringify(city.total))) ||
							[],
					},
				],
			};
		},
		data2: (canvas) => {
			return {
				labels: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
				datasets: [
					{
						label: "Performance",
						data: [
							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 0)
									.map((sale) => sale.quantity)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 1)
									.map((sale) => sale.quantity)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 2)
									.map((sale) => sale.quantity)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 3)
									.map((sale) => sale.quantity)
									.toString(),

							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 4)
									.map((sale) => sale.quantity)
									.toString(),
							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 5)
									.map((sale) => sale.quantity)
									.toString(),

							this.props.info &&
								this.props.info?.groupedByQuantitySales &&
								this.props.info?.groupedByQuantitySales
									.filter((sale) => sale.day == 6)
									.map((sale) => sale.quantity)
									.toString(),
						],
						maxBarThickness: 10,
					},
				],
			};
		},
	};
	render() {
		console.log(new Date().getDay());
		return (
			<>
				<Header />
                <React.StrictMode>
				{/* Page content */}
				<Container className="mt--7" fluid>
					<Row>
						<Col className="mb-5 mb-xl-0" xl="8">
							<Card className="bg-dark shadow">
								<CardHeader className="bg-transparent">
									<Row className="align-items-center">
										<div className="col">
											<h6 className="text-uppercase text-light ls-1 mb-1">
												Overview
											</h6>
											<h2 className="text-white mb-0">Weekly revenue</h2>
										</div>
										<div className="col">
											<Nav className="justify-content-end" pills>
												<NavItem>
													<NavLink
														className={classnames("py-2 px-3", {
															active: this.state.activeNav === 1,
														})}
														href="#pablo"
														onClick={(e) => this.toggleNavs(e, 1)}
													>
														<span className="d-none d-md-block">Week</span>
														<span className="d-md-none">M</span>
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames("py-2 px-3", {
															active: this.state.activeNav === 2,
														})}
														data-toggle="tab"
														href="#pablo"
														onClick={(e) => this.toggleNavs(e, 2)}
														disabled
													>
														<span className="d-none d-md-block">Month</span>
														<span className="d-md-none">W</span>
													</NavLink>
												</NavItem>
											</Nav>
										</div>
									</Row>
								</CardHeader>
								<CardBody>
									<div className="chart">
                                        {this.chartExample1 &&
                                            this.chartExample1.data1 &&	<Line
											data={
												this.chartExample1 &&
												this.chartExample1.data1 &&
												this.chartExample1.data1
											}
											options={chartExample1.options}
											getDatasetAtEvent={(e) => console.log(e)}
											className="chart-canvas"
										/>}
									</div>
								</CardBody>
							</Card>
						</Col>
						<Col xl="4">
							<Card className="shadow bg-dark">
								<CardHeader className="bg-transparent">
									<Row className="align-items-center">
										<div className="col">
											<h6 className="text-uppercase text-muted ls-1 mb-1">
												Performance by quantity
											</h6>
											<h2 className="mb-0" style={{ color: "white" }}>
												Weekly sales
											</h2>
										</div>
									</Row>
								</CardHeader>
								<CardBody>
									<div className="chart">
                                        {this.chartExample1 &&
                                            this.chartExample1.data2 &&<Bar
                                        
											data={
												this.chartExample1 &&
												this.chartExample1.data2 &&
												this.chartExample1.data2
											}
											options={chartExample2.options}
										/>}
									</div>
								</CardBody>
							</Card>{" "}
						</Col>
					</Row>
					<Row className="mt-5">
						<Col className="mb-5 mb-xl-0" xl="8">
							<Row>
								<Col md="6" xl="4">
									{" "}
									<ListGroup>
										<ListGroupItem className="d-flex bg-secondary justify-content-between align-items-center">
											<h4 className="text-muted text-uppercase">
												<i className="ni ni-bag-17"></i>
												{"  "}Top products
											</h4>
										</ListGroupItem>
										{this.props.stats &&
											this.props.stats.productsBySales &&
											this.props.stats.productsBySales
												.slice(0, 5)
												.map((status) => (
													<ListGroupItem className="d-flex justify-content-between align-items-center">
														<small>{status._id}</small>
														<Badge color="primary" pill>
															{status.total}
														</Badge>
													</ListGroupItem>
												))}
									</ListGroup>
								</Col>
								<Col md="6" xl="4">
									{" "}
									<ListGroup>
										<ListGroupItem className="d-flex bg-secondary justify-content-between align-items-center">
											<h4 className="text-muted text-uppercase">
												<i className="ni ni-archive-2"></i>
												{"  "}Top brands
											</h4>
										</ListGroupItem>
										{this.props.stats &&
											this.props.stats?.salesByBrand &&
											this.props.stats?.salesByBrand
												.slice(0, 5)
												.map((status) => (
													<ListGroupItem className="d-flex justify-content-between align-items-center">
														<small>{status._id}</small>
														<Badge color="danger" pill>
															{status.total} sales
														</Badge>
													</ListGroupItem>
												))}
									</ListGroup>
								</Col>
								<Col md="6" xl="4">
									{" "}
									<ListGroup>
										<ListGroupItem className="d-flex bg-secondary justify-content-between align-items-center">
											<h4 className="text-muted text-uppercase">
												<i className="ni ni-archive-2"></i>
												{"  "}Top customers
											</h4>
										</ListGroupItem>
										{this.props.stats &&
											this.props.stats?.customers &&
											this.props.stats?.customers?.slice(0, 5).map((status) => (
												<ListGroupItem className="d-flex justify-content-between align-items-center">
													<small>{status?.customer[0].name}</small>
													{/* <hr /> */}
													{/* <small>{status.customer[0].email}</small> */}
													<Badge color="danger" pill>
														{status.total} sales
													</Badge>
												</ListGroupItem>
											))}
									</ListGroup>
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="mt-5">
						<Col className="mb-5 mb-xl-0" xl="8">
							<Card className="shadow">
								<CardHeader className="border-0">
									<Row className="align-items-center">
										<div className="col">
											<h3 className="mb-0">Weekly stats</h3>
										</div>
										<div className="col text-right">
											<Link to="/admin/order-summary">
												{" "}
												<Button
													color="primary"
													href="#pablo"
													// onClick={(e) => e.preventDefault()}
													size="sm"
												>
													See order summary
												</Button>
											</Link>
										</div>
									</Row>
								</CardHeader>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Day</th>
											<th scope="col">Daily sales</th>
											<th scope="col">Daily gross revenue</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">Sunday</th>
											<td>
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 0)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 0)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>

										<tr>
											<th scope="row">Monday</th>
											<td>
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 1)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 1)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>

										<tr>
											<th scope="row">Tuesday</th>
											<td>
												{" "}
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 2)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 2)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>

										<tr>
											<th scope="row">Wednesday</th>
											<td>
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 3)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 3)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>
										<tr>
											<th scope="row">Thursday</th>
											<td>
												{" "}
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 4)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 4)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>
										<tr>
											<th scope="row">Friday</th>
											<td>
												{" "}
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 5)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 5)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>
										<tr>
											<th scope="row">Saturday</th>
											<td>
												{this.props.info &&
													this.props.info?.groupedByQuantitySales &&
													this.props.info?.groupedByQuantitySales
														.filter((sale) => sale.day == 6)
														.map((sale) => sale.quantity)
														.toString()}
											</td>

											<td>
												{this.props.info &&
													this.props.info?.groupedByRevenueSales &&
													this.props.info?.groupedByRevenueSales
														.filter((sale) => sale.day == 6)
														.map((sale) =>
															new Intl.NumberFormat("de-ZA", {
																style: "currency",
																currency: "ZAR",
															}).format(sale.price)
														)
														.toString()}
											</td>
										</tr>
									</tbody>
								</Table>
							</Card>
						</Col>
						<Col xl="4">
							<Card className="card-stats mb-4 mb-xl-0 ">
								{/* <Map /> */}
								<div className="chart">
									<Pie
										options={this.city}
										data={
											this.chartExample1 &&
											this.chartExample1.data3 &&
											this.chartExample1.data3
										}
										// options={chartExample2.options}
										className="chart-canvas"
										id="chart-pie"
									/>
								</div>{" "}
								<hr />
								<div className="chart">
									{" "}
									<Polar
										options={this.country}
										data={this.chartExample1.data4 && this.chartExample1.data4}
										// options={chartExample2.options}
										className="chart-canvas"
										id="chart-pie"
									/>
								</div>
								<br />
							</Card>
						</Col>
					</Row>
				</Container>
                    </React.StrictMode>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,

	isAuthenticated: state.auth,
	cartItems: state.cart.cartItems,
	myPlug: state?.myPlug.plug,
	plugStats: state?.plugStats,
	info: state.plugStats?.plugWeeklyStats,
	stats: state.plugSales.orders,
});

export default connect(mapStateToProps, {

	getPlugStats,
	getPlugWeeklyStats,
    getPlugDailyStats,
    getProductStats,
    getDueAmount,
})(Index);
