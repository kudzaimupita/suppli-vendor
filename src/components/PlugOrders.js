// import React, { PureComponent } from "react";
// import { PropTypes } from "prop-types";
// import { connect } from "react-redux";
// import { logout } from "../actions/auth";
// import NavUserDropdown from "../components/NavUserDropdown";
// import { getCatergories } from "../actions/catergories";
// import { loadMyPlug } from "../actions/auth";
// import { getPlugStats, getDueAmount } from "../actions/plugs";
// import { Avatar } from "antd";
// // reactstrap components
// import {
//   Badge,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Card,
//   Media,
//   Progress,
//   Table,
//   UncontrolledTooltip,
//   Row,
// } from "reactstrap";

// class OrderTable extends React.Component {
//   render() {
//     return (
//       <>

//         <Card className="bg-default shadow">
//           <Table className="align-items-center table-dark" responsive>
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col">Product </th>
//                 <th scope="col">Order date</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Order Status</th>
//                 <th scope="col">We paid?</th>
//                 <th scope="col">Payment</th>
//                 <th scope="col">Shipping city</th>
//                 <th scope="col">Address</th>
//                 <th scope="col">Phone</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Customer email</th>
//                 <th scope="col">Order Id</th>
//               </tr>
//             </thead>
//             <tbody>
//               {" "}
//               {this.props.orders &&
//                 this.props.orders.plugSales.map((order) => (
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <Avatar
//                           shape="square"
//                           size={64}
//                           src={`http://localhost:5000/img/products/${order.boughtProducts.imageCover}`}
//                         />

//                         <Media>
//                           {" "}
//                           <br></br>
//                           <span
//                             style={{ marginLeft: "10px" }}
//                             className="mb-0 text-sm"
//                           >

//                           </span>
//                           <td className=" td-name">

//                     {"    "} {order.boughtProducts.name}

//               <br></br>
//               <small color='info'>{order.boughtProducts.size}  </small>
//             </td>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td><i className="ni ni-calendar-grid-58"></i>{"  "} {order.createdOn.slice(0, 10)}</td>{" "}
//                     <td>
//                    <small>R</small>    {order.boughtProducts.price} *{" "}
//                       {order.boughtProducts.quantity}
//                     </td>
//                     <td>
//                       <Badge color="" className="badge-dot m2-4 ">
//                         {order.status == "processing" ? (
//                           <>
//                           <i className="bg-danger" />
//                           <i className="ni ni-shop"></i></>
//                         ) : null}
//                         {order.status == "fullfilled" ? (<>
//                           <i className="bg-success" /> <i className="ni ni-satisfied"></i></>
//                         ) : null}
//                         {order.status == "enroute" ? (
//                           <>
//                           <i className="bg-warning" />
//                           <i className="ni ni-delivery-fast"></i></>
//                         ) : null}
//                         {order.status == "cancelled" ? (
//                           <i className="bg-danger" />
//                         ) : null}
//                       </Badge>
//                       {order.status}
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2"></span>
//                         {/* <div>
//                           <Progress
//                             max="100"
//                             value="60"
//                             barClassName="bg-warning"
//                           />
//                         </div> */}

//                         {order.plugsBalanced ? (
//                           <i class="fa fa-check-circle"></i>
//                         ) : (
//                           <i class="fa fa-times"></i>
//                         )}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2"></span>
//                         {order.paymentStatus}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2"></span>

//                         <i className="ni ni-pin-3" color='info'></i>{"     "} {order.shippingAddress.city}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2"></span>

//                         <i className="ni ni-pin-3" color='info'></i>{"     "}  {order.shippingAddress.address}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2"></span>

//                         <i className="ni ni-mobile-button" color='info'></i>{"     "}   {order.phone}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2"></span>
//                         {order.userDetails[0].name}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         {order.userDetails[0].email}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         {order._id}
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </Table>
//         </Card>
//       </>
//     );
//   }
// }

// OrderTable.defaultProps = {
//   catergories: [],
//   myPlug: {},
//   plugStats: {},
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,

//   isAuthenticated: state.auth,
//   cartItems: state.cart.cartItems,
//   myPlug: state.myPlug.plug,
//   orders: state.plugSales.orders,
//   amountDue: state.unBalancedSales.stats,
// });

// export default connect(mapStateToProps, {
//   logout,
//   loadMyPlug,
//   getPlugStats,
//   getCatergories,
//   getDueAmount,
// })(OrderTable);

import React from "react";
import ReactToPrint from "react-to-print";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Select from "react-select";
import ReactBSAlert from "react-bootstrap-sweetalert";
import {
  Badge,
  Container,
  ButtonGroup,
  // Button,
  Table,
  Media,
  Col,
  UncontrolledTooltip,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import {
  Avatar,
  Button,
  Card,
  Drawer,
  List,
  Divide,
  Descriptions,
  Radio,
  Divider,
} from "antd";
import { logout } from "../actions/auth";
import { getProduct, deleteProduct, updateProduct } from "../actions/products";
import { loadMyPlug } from "../actions/auth";
import { getOrder, updateOrder } from "../actions/orders";
import { getPlugStats, getDueAmount } from "../actions/plugs";
import { setAlert } from "../actions/alert";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div
      className="dataTables_length"
      id="datatable-basic_length"
      style={{ marginLeft: "20px" }}
    >
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

class OrderTable extends React.Component {
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  state = {
    order: {},
    singleSelect: "",
    size: "small",
    visible: false,
    productId: "",
    was: "",
    price: "",
    originalPrice: "",
    emptyWas: "",
    onClearance: true,
    noClearance: false,
    alert: null,
    plugsBalanced: true,
    plugsNotBalanced: false,
    orderId: "",
  };

  handleWasChange = (e) => {
    this.setState({ was: e.target.value });
  };

  handleWasChange = (e) => {
    this.setState({ was: e.target.value });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  dateFormatter = (cell, row) => (
    <>
      <small> {row.createdOn.slice(0, 10)}</small>
    </>
  );

  wePaidFormatter = (cell, row) => (
    <>
      {" "}
      {row.plugsBalanced ? (
        <i class="fa fa-check-circle"></i>
      ) : (
        <i class="fa fa-times"></i>
      )}
    </>
  );
  activeFormatter = (cell, row) => (
    <Badge color="" className="badge-dot m2-4 ">
      {row && row.status === "processing" ? (
        <>
          <i className="bg-danger" />
          <i className="ni ni-shop"></i>
          <small> {row.status}</small>
        </>
      ) : null}
      {row.status === "fullfilled" ? (
        <>
          <i className="bg-success" /> <i className="ni ni-satisfied"></i>{" "}
          <small> {row.status}</small>
        </>
      ) : null}
      {row.status === "enroute" ? (
        <>
          <i className="bg-warning" />
          <i className="ni ni-delivery-fast"></i>
          <small> {row.status}</small>
        </>
      ) : null}
      {row.status === "cancelled" ? <i className="bg-danger" /> : null}
    </Badge>
  );
  imageFormatter = (cell, row) => (
    <Avatar
      shape="square"
      size={32}
      src={`http://localhost:5000/img/products/${row.boughtProducts.imageCover}`}
    />
  );
  actionsFormatter = (cell, row) => (
    <div className="d-flex align-items-center">
      <Button
        className=" btn-icon"
        color="success"
        size="sm"
        type="button"
        style={{ marginRight: "5px" }}
        onClick={() =>
          this.setState({ order: row }) & this.setState({ visible: true })
        }
      >
        <i class="fa fa-eye"></i> View
      </Button>
    </div>
  );
  handleStatusChange = (singleSelect) => {
    this.setState({ singleSelect });
    this.setState({ orderId: this.props.order[0] && this.props.order[0]._id });
  };

  onPaidSubmit = async (id) => {
    if (this.props.order[0] && this.props.order[0].status !== "fullfilled") {
      setAlert("Orders have to b fullfilled before any payments", "danger");
    }

    this.props.updateOrder(id, { plugsBalanced: this.state.plugsBalanced });
  };

  onNotPaidSubmit = async (id) => {
    this.props.updateOrder(id, { plugsBalanced: this.state.plugsNotBalanced });
  };
  onStatusSubmit = async (id) => {
    if (!this.state.singleSelect) {
      return setAlert("Please select a status to update", "danger");
    }
    this.props.updateOrder(this.state.orderId, {
      status: this.state.singleSelect && this.state.singleSelect.value,
    });
  };

  onClearanceSubmit = async (id) => {
    const data = new FormData();

    data.append("clearance", this.state.onClearance);

    this.props.updateProduct(id, data);
  };

  onNoClearanceSubmit = async (id) => {
    const data = new FormData();

    data.append("clearance", this.state.noClearance);

    this.props.updateProduct(id, data);
  };

  onCancelSubmit = async (e) => {
    const data = new FormData();

    data.append("was", this.state.emptyWas);

    this.props.updateProduct(this.state.productId, data);
  };

  copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block" }}
          title="Copied to clipboard!"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="info"
          btnSize=""
        ></ReactBSAlert>
      ),
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.alert}
        <ToolkitProvider
          data={(this.props.orders && this.props.orders.plugSales) || []}
          keyField="_id"
          columns={[
            {
              dataField: "orderID",
              text: "#",
              sort: true,
            },
            {
              dataField: "actions",
              text: "",
              isDummyField: true,
              csvExport: false,
              formatter: this.imageFormatter,
            },
            {
              dataField: "boughtProducts.name",
              text: "Method",
              sort: true,
            },
            {
              dataField: "boughtProducts.price",
              text: "Amount",
              sort: true,
            },
            {
              dataField: "status",
              text: "Status",
              isDummyField: true,
              csvExport: false,
              sort: true,
              formatter: this.activeFormatter,
            },

            {
              dataField: "plugsBalanced",
              text: "Paid",
              isDummyField: true,
              csvExport: false,
              sort: true,
              formatter: this.wePaidFormatter,
            },

            {
              dataField: "createdOn",
              text: "Created On",
              isDummyField: true,
              csvExport: false,
              sort: true,
              formatter: this.dateFormatter,
            },

            {
              dataField: "shippingAddress.country",
              text: "Country",
              sort: true,
            },

            {
              dataField: "actions",
              text: "",
              isDummyField: true,
              csvExport: false,
              formatter: this.actionsFormatter,
            },
          ]}
          search
        >
          {(props) => (
            <Card>
              {" "}
              <div className="py-2">
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={12}>
                      <div id="datatable-basic_filter">
                        <label>
                          Search:{"  "}
                          <SearchBar
                            className="form-control-sm"
                            placeholder="Search orders"
                            {...props.searchProps}
                          />
                        </label>
                        <ButtonGroup className=" px-4 pb-1 float-right">
                          <Button
                            className="buttons-copy buttons-html5"
                            color="info"
                            size="sm"
                            outline
                            id="copy-tooltip"
                            onClick={() =>
                              this.copyToClipboardAsTable(
                                document.getElementById("react-bs-table")
                              )
                            }
                          >
                            <span>Copy</span>
                          </Button>
                          <ReactToPrint
                            trigger={() => (
                              <Button
                                href="#"
                                color="info"
                                size="sm"
                                className="buttons-copy buttons-html5"
                                id="print-tooltip"
                              >
                                Print
                              </Button>
                            )}
                            content={() => this.componentRef}
                          />
                        </ButtonGroup>
                        <UncontrolledTooltip
                          placement="top"
                          target="print-tooltip"
                        >
                          This will open a print page with the visible rows of
                          the table.
                        </UncontrolledTooltip>
                        <UncontrolledTooltip
                          placement="top"
                          target="copy-tooltip"
                        >
                          This will copy to your clipboard the visible rows of
                          the table.
                        </UncontrolledTooltip>
                      </div>
                    </Col>
                  </Row>
                </Container>{" "}
                <BootstrapTable
                  responsive
                  striped
                  hover
                  variant="dark"
                  ref={(el) => (this.componentRef = el)}
                  {...props.baseProps}
                  bootstrap4={true}
                  pagination={pagination}
                  bordered={true}
                  id="react-bs-table"
                />
              </div>
            </Card>
          )}
        </ToolkitProvider>

        <>
          <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div>
              {" "}
              <div className="col text-left"></div>
              <Descriptions
                bordered
                column="2"
                title={
                  <>
                    {" "}
                    Order:{"  "}
                    {this.state.order && this.state.order.orderID}{" "}
                  </>
                }
                size={this.state.size}
                extra={
                  <>
                    {" "}
                    <Row>
                      {" "}
                      <Button
                        style={{
                          marginLeft: "15px",
                          marginRight: "20px",
                        }}
                        danger
                        type="primary"
                        size="sm"
                        onClick={() => this.setState({ visible: false })}
                      >
                        {" "}
                        Close
                      </Button>
                    </Row>
                  </>
                }
              >
                <Descriptions.Item span={1.5} label="STATUS">
                  {this.state.order && this.state.order.status}
                </Descriptions.Item>

                <Descriptions.Item span={1.5} label="AMOUNT">
                  {this.state.order && this.state.order.totalPrice
                    ? new Intl.NumberFormat("de-ZA", {
                        style: "currency",
                        currency: "ZAR",
                      }).format(this.state.order.totalPrice)
                    : 0}
                </Descriptions.Item>
                <Descriptions.Item span={1.5} label="CUSTOMER">
                  {this.state.order.userDetails &&
                    this.state.order.userDetails[0].name}
                </Descriptions.Item>
                <Descriptions.Item span={1.5} label="EMAIL">
                  {this.state.order.userDetails &&
                    this.state.order.userDetails[0].email}{" "}
                </Descriptions.Item>
                <Descriptions.Item span={1.5} label="PHONE">
                  {this.state.order && this.state.order.phone}
                </Descriptions.Item>
                <Descriptions.Item span={1.5} label="ALTERNATIVE">
                  {" "}
                  {this.state.order && this.state.order.alternativePhone}
                </Descriptions.Item>
                <Descriptions.Item span={1.5} label="ADDRESS">
                  <>
                    {this.state.order.shippingAddress &&
                      this.state.order.shippingAddress.address}{" "}
                    <br />
                    {this.state.order && ":"}
                    {this.state.order.shippingAddress &&
                      this.state.order.shippingAddress.city}{" "}
                    <br />
                    {this.state.order && ":"}
                    {this.state.order.shippingAddress &&
                      this.state.order.shippingAddress.postalCode}{" "}
                    <br />
                    {this.state.order.shippingAddress &&
                      this.state.order.shippingAddress.country}
                  </>
                </Descriptions.Item>
                <Descriptions.Item span={1.5} label="INSTRUCTIONS">
                  <>
                    {this.state.order && this.state.order.specialInstruction}{" "}
                  </>
                </Descriptions.Item>
              </Descriptions>
            </div>
            <Table responsive className="align-items-center table-flush">
              <thead className="thead-light">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <i className="ni ni-calendar-grid-58 text-black" /> Created
                    On{" "}
                  </th>
                  <td>
                    {" "}
                    <strong>
                      {this.state.order.createdOn &&
                        this.state.order.createdOn.slice(0, 10)}{" "}
                    </strong>{" "}
                  </td>
                </tr>
                {this.state.order && this.state.order.enrouteOn && (
                  <tr>
                    <th scope="row">
                      <i className="ni ni-calendar-grid-58 text-black" />{" "}
                      Dispatched On{" "}
                    </th>
                    <td>
                      {" "}
                      <strong>
                        {this.state.order &&
                          this.state.order.enrouteOn &&
                          this.state.order.enrouteOn.slice(0, 10)}
                        {" -- "}
                        {this.state.order &&
                          this.state.order.enrouteOn &&
                          this.state.order.enrouteOn.slice(11, 16)}
                      </strong>
                    </td>
                  </tr>
                )}
                {this.state.order && this.state.order.fullfilledOn && (
                  <tr>
                    <th scope="row">
                      <i className="ni ni-calendar-grid-58 text-black" />{" "}
                      Fullfilled On{" "}
                    </th>
                    <td>
                      {" "}
                      <strong>
                        {this.state.order &&
                          this.state.order.fullfilledOn &&
                          this.state.order.fullfilledOn.slice(0, 10)}
                        {"-- "}
                        {this.state.order &&
                          this.state.order.fullfilledOn &&
                          this.state.order.fullfilledOn.slice(11, 16)}
                      </strong>
                    </td>
                  </tr>
                )}
                {this.state.order && this.state.order.plugsBalancedOn && (
                  <tr>
                    <th scope="row">
                      <i className="ni ni-calendar-grid-58 text-black" /> Shops
                      paid On{" "}
                    </th>
                    <td>
                      {" "}
                      <strong>
                        {this.state.order &&
                          this.state.order.plugsBalancedOn &&
                          this.state.order.plugsBalancedOn.slice(0, 10)}
                        {" --"}
                        {this.state.order &&
                          this.state.order.plugsBalancedOn &&
                          this.state.order.plugsBalancedOn.slice(11, 16)}
                      </strong>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>{" "}
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Shop details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <Avatar
                        shape="square"
                        size={64}
                        src={`http://localhost:5000/img/products/${
                          this.state.order.boughtProducts &&
                          this.state.order.boughtProducts.imageCover
                        }`}
                      />

                      <Media>
                        <td className=" td-name">
                          {"    "}{" "}
                          {this.state.order.boughtProducts &&
                            this.state.order.boughtProducts.name}
                          {"    "}
                          <br color="default" className="bg-default"></br>
                          <small color="info">
                            {this.state.order.boughtProducts &&
                              this.state.order.boughtProducts.brandName}
                            ;{" "}
                          </small>
                          <br color="default" className="bg-default"></br>
                          <small color="info">
                            {" "}
                            <strong>Size:</strong>{" "}
                            {this.state.order.boughtProducts &&
                              this.state.order.boughtProducts.size}{" "}
                          </small>
                          <br color="default" className="bg-default"></br>
                          <small color="info">
                            <strong>Quantity :</strong>{" "}
                            {this.state.order.boughtProducts &&
                              this.state.order.boughtProducts.quantity}{" "}
                            * <small>R</small>{" "}
                            {this.state.order.boughtProducts &&
                              this.state.order.boughtProducts.price}
                          </small>
                          <br color="default" className="bg-default"></br>
                        </td>
                      </Media>
                    </Media>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Drawer>
        </>
      </>
    );
  }
}
OrderTable.defaultProps = {
  catergories: [],
  myPlug: {},
  plugStats: {},
};

const mapStateToProps = (state) => ({
  auth: state.auth,

  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug.plug,
  orders: state.plugSales.orders,
  amountDue: state.unBalancedSales.stats,
});

export default connect(mapStateToProps, {
  logout,
  loadMyPlug,
  getPlugStats,

  getDueAmount,
})(OrderTable);
