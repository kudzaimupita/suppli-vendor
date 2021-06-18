import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import{ Spinner} from "reactstrap";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
            <div
                className="example"
                style={{
                    marginTop:'300px',
                    borderRadius: ' 4px',
                    textAlign: 'center',
                    // margin: ' 20px 0',
                    marginBottom: '20px',
                    padding: '30px 50px',
                    background: '#fff',
                    zIndex: '99',
                    width: '100%',
                    height: '100%',
                    // margin: 'auto',
                    // display: 'block',
                    position: 'fixed',
                }}>
                <Spinner size="large" />
            </div>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
