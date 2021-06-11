import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/vendors/style";
import "./styles/wieldy.less";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import "react-notification-alert/dist/animate.css";
import "./assets/scss/image-gallery.scss";
import "antd/dist/antd.css";

// import "./bootstrap/dist/css/bootstrap.css";
// import "./assets/scss/now-ui-dashboard.scss?v1.4.0";
// import "./assets/css/demo.css";
// import "./assets/scss/black-dashboard-react.scss";
// import "./assets/demo/demo.css";
// import "./assets/css/nucleo-icons.css";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
