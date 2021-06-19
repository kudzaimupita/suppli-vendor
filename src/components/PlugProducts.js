import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { logout } from "../actions/auth";
import NavUserDropdown from "../components/NavUserDropdown";
import { getProduct, deleteProduct, updateProduct } from "../actions/products";
import { loadMyPlug } from "../actions/auth";
import { getPlugStats, getDueAmount } from "../actions/plugs";
import { Avatar, Checkbox, Card,Tooltip} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import ReactToPrint from "react-to-print";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Badge,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Spinner,
  Table,
    // UncontrolledTooltip,
  Input,
  ButtonGroup,
  Button,
  Modal,
  PopoverBody,
  UncontrolledPopover,
  Col,
  UncontrolledTooltip,
  Row,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { setAlert } from "../actions/alert";
const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div
      className="dataTables_length"
      id="datatable-basic_length"
      style={{ marginLeft: "30px", marginTop: "20px" }}
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
    productId: "",
    was: "",
    price: "",
    originalPrice: "",
    emptyWas: "",
    onClearance: true,
    noClearance: false,
  };
  onSaleFormatter = (cell, row) => (
    <>
      {" "}
          <Tooltip title="Edit Sale price">
      <Button
        color="danger"
        id="tooltip876279349"
        type="button"
        size="sm"
        onClick={() =>
          this.setState({ productId: row._id }) &
          this.setState({ price: row.was }) &
          this.setState({ originalPrice: row.price })
        }
      >
        <small>was R</small> {row.was} <i class="fa fa-edit"></i>
              </Button> </Tooltip>
      <UncontrolledPopover placement="top" target="tooltip876279349">
        <PopoverBody>
          <div key={row._id} className="d-flex align-items-center">
            {" "}
            <Input
              className="form-control-flush"
              type="number"
              size="sm"
              style={{ width: "70px" }}
              defaultValue={this.state.price}
              onChange={this.handleWasChange}
            />{" "}
            <Button
              style={{ marginLeft: "6px" }}
              color="info"
              size="sm"
              onClick={() => this.onSubmit()}
            >
              {" "}
              <i class="fa fa-check-circle"></i>
            </Button>
            <Button
              style={{ marginLeft: "6px" }}
              color="default"
              size="sm"
              onClick={() => this.onCancelSubmit()}
            >
              {" "}
              <i class="ni ni-fat-remove">
                <small>Clear </small>
              </i>
            </Button>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
    </>
  );
  handleWasChange = (e) => {
    this.setState({ was: e.target.value });
  };
  imageFormatter = (cell, row) => (
    <Avatar
      shape="square"
      size={40}
      src={`https://suppli-images.s3.af-south-1.amazonaws.com/${row.imageCover && row.imageCover}`}
    />
  );

  clearanceFormatter = (cell, row) => (
    <>
      {row.clearance ? (
              <Tooltip title="Remove from clearance">
        <Button
          color="success"
          size="sm"
          onClick={() =>
            this.setState({ productId: row._id }) &
            this.onNoClearanceSubmit(row._id)
          }
        >
          {" "}
          <i class="fa fa-minus"></i>
          <small>remove</small>
        </Button>
    
    
  </Tooltip>
      ) : (
                  <Tooltip title="Add to clearance">
        <Button
          color="info"
                      data-placement="top"
                      id="tooltip611234743"
          size="sm"
          onClick={() =>
            this.setState({ productId: row._id }) &
            this.onClearanceSubmit(row._id)
          }
        >
          {" "}
          <i class="fa fa-plus"></i>
          <small>Add</small>{" "}
                      </Button>     </Tooltip>
      )}
    </>
  );
  actionsFormatter = (cell, row) => (
    <>
      {" "}
      <div className="d-flex align-items-center">
        <Link to={`/admin/edit-product/${row._id}`}>
          {" "}
                  <Tooltip title="Edit">
          <Button
            className=" btn-icon"
            color="info"
            size="sm"
            type="button"
            // onClick={() => this.props.editProduct(product)}
            style={{ marginRight: "5px" }}
          >
            <i class="fa fa-edit"></i>
          </Button>
                  </Tooltip>
        </Link>
        <Link to={`/admin/product/${row._id}`}>
                  <Tooltip title="View">
          <Button
            className=" btn-icon"
            color="success"
            size="sm"
            type="button"
            style={{ marginRight: "5px" }}
          >
            <i class="fa fa-eye"></i>
                      </Button></Tooltip>
        </Link>
              <Tooltip title="Delete">
        <Button
          className=" btn-icon"
          color="danger"
          size="sm"
          type="button"
          onClick={() =>
            // this.toggleModal("notificationModal") &
            this.props.deleteProduct(row._id)
          }
        >
          <i class="fa fa-trash"></i>
                  </Button></Tooltip>
      </div>
    </>
  );
  onSubmit = async (e) => {
    if (this.state.was < 1 || this.state.was < this.state.originalPrice)
      return this.props.setAlert(
        "Please enter a sale price larger than the current price",
        "danger"
      );
    const data = new FormData();

    data.append("was", this.state.was);

    this.props.updateProduct(this.state.productId, data);
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

  //   onClearanceSubmit = async (e) => {

  //     const data = new FormData();

  //      data.append("was", this.state.emptyWas)

  // this.props.updateProduct(this.state.productId, data)

  //   };
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
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
            {this.props.loading && <div
                className="example"
                style={{
                    marginTop: '300px',
                    borderRadius: ' 4px',
                    textAlign: 'center',
                    // margin: ' 20px 0',
                    marginBottom: '20px',
                    padding: '40px 90px',
                    background: '#fff',
                    zIndex: '99',
                    width: '100%',
                    height: '100%',
                    margin: 'auto',
                    display: 'block',
                    position: 'fixed',
                }}>
                <Spinner size="large" />
            </div>}
        {this.state.alert}
        <ToolkitProvider
          data={
            (this.props.myPlug.products && this.props.myPlug.products) || []
          }
          keyField="_id"
          columns={[
            {
              dataField: "actions",
              text: "",
              isDummyField: true,
              csvExport: false,
              formatter: this.imageFormatter,
            },
            {
              dataField: "name",
              text: "Name",
              sort: true,
            },
            {
              dataField: "brandName",
              text: "Brand",
              sort: true,
            },
            {
              dataField: "orders.length",
              text: "Orders",
              sort: true,
            },
            {
              dataField: "quantityInStock",
              text: "Stock",
              sort: true,
            },
            {
              dataField: "actions",
              text: "On sale",
              isDummyField: true,
              csvExport: false,
              formatter: this.onSaleFormatter,
            },
            {
              dataField: "price",
              text: "Price",
              sort: true,
            },
            {
              dataField: "actions",
              text: "Actions",
              isDummyField: true,
              csvExport: false,
              formatter: this.actionsFormatter,
            },
            {
              dataField: "actions",
              text: "Clearance",
              isDummyField: true,
              csvExport: false,
              formatter: this.clearanceFormatter,
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
                            placeholder="Search products"
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
    loading:state.myPlug.loading,
  auth: state.auth,
  product: state.product.product,
  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug.plug,
  orders: state.plugSales.orders,
  amountDue: state.unBalancedSales.stats,
});

export default connect(mapStateToProps, {
  getProduct,
  logout,
  loadMyPlug,
  setAlert,
  getPlugStats,
  updateProduct,
  deleteProduct,
  getDueAmount,
})(OrderTable);
