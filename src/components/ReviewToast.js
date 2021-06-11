import React from "react";

// reactstrap components
import { Toast, ToastBody } from "reactstrap";

// Core Components

function Example() {
  return (
    <>
      <Toast className="bg-info">
        <div className="toast-header text-white">
          <img
            alt="..."
            className="rounded mr-2"
            // src="https://demos.creative-tim.com/argon-design-system-pro-react/assets/img/tim.png"
          ></img>
          <strong className="mr-auto">Creative Tim</strong>{" "}
          <small>11 mins ago</small>
        </div>
        <ToastBody className="text-white">
          Hello, world! This is an info toast message.
        </ToastBody>
      </Toast>
    </>
  );
}

export default Example;
