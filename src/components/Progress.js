import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

function Example() {
  return (
    <>
      <div className=" progress-info">
        <div className=" progress-label">
          <span>You're almost there :)</span>
        </div>
        <div className=" progress-percentage">
          <span>80%</span>
        </div>
      </div>
      <Progress max="100" value="80" color="info"></Progress>
    </>
  );
}

export default Example;
