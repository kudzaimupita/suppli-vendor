import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// Core Components

function Example() {
  const [dangerAlert, setDangerAlert] = React.useState();

  return (
    <>
      <Container
        fluid={true}
        style={{
          height: "40px",
          padding: 0,
        }}
      >
        <Alert
          color="danger"
          isOpen={dangerAlert}
          style={{
            height: "40px",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <span className="alert-icon">
            <i class="fa fa-exclamation-circle"></i>
          </span>
          <span
            className="alert-text align-content-center"
            style={{ justifyContent: "flex-end" }}
          >
            <strong></strong> Enjoy this season with up to 50% off on some
            products!!
          </span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setDangerAlert(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
      </Container>
    </>
  );
}

export default Example;
