import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./components/ForgotPassword";
import PlugDashboard from "./pages/PlugDashboard";
import Checkout from "./pages/Checkout";
import CreatePlug from "./pages/CreatePlug";
import ResetPassword from "./components/ResetPassword";
import { loadUser, loadMyPlug } from "./actions/auth";
import { getPlugWeeklyStats, getPlugStats } from "./actions/plugs";
import setAuthToken from "./utils/seAuthToken";
import { LOGOUT } from "./constants/authConstants";
import Alert from "./components/alert";
import ProductDetails from "./pages/ProductDetails";
import PlugDetails from "./pages/PlugDetails";
import ProductCard from "./components/ProductCard";
import LandingPage from "./pages/LandingPage";
import UserProfile from "./pages/UserProfile";
import { store, persistor } from "../src/store";
import { PersistGate } from "redux-persist/integration/react";
import BottomNavigation from "../src/components/ButtomNavigation";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import PrivateRoute from "./PrivateRoute";

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());

      store.dispatch(getPlugStats());
      store.dispatch(getPlugWeeklyStats());
    }

    // if (store.getState().myPlug) {
    //   store.dispatch(getPlugStats(store.getState().myPlug.plug._id));
    // }

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Fragment>
            <Alert />
            <Switch>
              <Route exact path="/signup" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path="/resetpassword" component={ResetPassword} />

              <PrivateRoute path="/admin" component={AdminLayout} />

              <Redirect from="/" to="/admin/index" />
              <Redirect from="/dashboard" to="/admin/index" />
            </Switch>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <Router>
    //       <Fragment>
    //         {/* <BottomNavigation /> */}
    //         <Alert />
    //         <Switch>
    //           <Route exact path="/signup" component={Register} />
    //           <Route exact path="/login" component={Login} />
    //           <Route exact path="/forgotpassword" component={ForgotPassword} />
    //           <Route exact path="/resetpassword" component={ResetPassword} />
    //            <Route exact path="/dashboard" component={PlugDashboard} />
    //            <Route exact path="/checkout" component={Checkout} />
    //            <Route exact path="/productcard" component={ProductCard} />
    //            <Route exact path="/" component={LandingPage} />
    //            <Route exact path="/create-plug" component={CreatePlug} />
    //            <Route exact path="/admin/product/:id" component={ProductDetails} />
    //            <Route exact path="/plug/:plugid" component={PlugDetails} />
    //           {/* <Route exact path="/profile" component={} /> */}

    //           <PrivateRoute path="/admin" component={AdminLayout} />
    //           <PrivateRoute exact path="/profile" component={UserProfile} />
    //           {/* <Redirect fromy="/" to="/admin/index" /> */}
    //           <Redirect from="/dashboard" to="/admin/index" />
    //         </Switch>
    //       </Fragment>
    //     </Router>
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
