import React, { useEffect, Fragment } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { loadUser, loadMyPlug } from "./actions/auth";
import { getPlugWeeklyStats, getPlugStats } from "./actions/plugs";
import setAuthToken from "./utils/seAuthToken";
import { LOGOUT } from "./constants/authConstants";
import Alert from "./components/alert";
import { store, persistor } from "../src/store";
import AdminLayout from "./layouts/Admin.js";
import PrivateRoute from "./PrivateRoute";

function App() {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			store.dispatch(loadUser());
			store.dispatch(loadMyPlug());
			store.dispatch(getPlugStats());
			store.dispatch(getPlugWeeklyStats());
		}

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
	);
}

export default App;
