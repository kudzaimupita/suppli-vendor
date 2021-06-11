import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import NavUserDropdown from "./NavUserDropdown";
import { getCatergories } from "../actions/catergories";
import { loadMyPlug } from "../actions/auth";
import { getPlugStats, getDueAmount } from "../actions/plugs";
// react plugin that prints a given react component
import ReactToPrint from "react-to-print";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// import { dataTable } from "variables/general";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
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
        }{" "}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

class ReactBSTables extends React.Component {
  state = {
    alert: null,
  };
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
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Copied to clipboard!
        </ReactBSAlert>
      ),
    });
  };
  render() {
    return (
      <>
        <Container>
          {this.state.alert}
          <ToolkitProvider
            data={this.props.myPlug.products && this.props.myPlug.products}
            keyField="name"
            columns={[
              {
                dataField: "name",
                text: "Name",
                sort: true,
              },
              {
                dataField: "price",
                text: "Price",
                sort: true,
              },
              {
                dataField: "brandName",
                text: "Brand name",
                sort: true,
              },
              {
                dataField: "createdOn",
                text: "Created on",
                sort: true,
              },
              {
                dataField: "start_date",
                text: "Start date",
                sort: true,
              },
              {
                dataField: "salary",
                text: "Salary",
                sort: true,
              },
            ]}
            search
          >
            {(props) => (
              <div className="py-4">
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={6}>
                      <ButtonGroup>
                        <Button
                          className="buttons-copy buttons-html5"
                          color="default"
                          size="sm"
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
                              color="default"
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
                        This will open a print page with the visible rows of the
                        table.
                      </UncontrolledTooltip>
                      <UncontrolledTooltip
                        placement="top"
                        target="copy-tooltip"
                      >
                        This will copy to your clipboard the visible rows of the
                        table.
                      </UncontrolledTooltip>
                    </Col>
                    <Col xs={12} sm={6}>
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-4 pb-1 float-right"
                      >
                        <label>
                          Search:
                          <SearchBar
                            className="form-control-sm"
                            placeholder=""
                            {...props.searchProps}
                          />
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <BootstrapTable
                  ref={(el) => (this.componentRef = el)}
                  {...props.baseProps}
                  bootstrap4={true}
                  pagination={pagination}
                  bordered={false}
                  id="react-bs-table"
                />
              </div>
            )}
          </ToolkitProvider>
        </Container>
      </>
    );
  }
}

ReactBSTables.defaultProps = {
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
  getCatergories,
  getDueAmount,
})(ReactBSTables);
