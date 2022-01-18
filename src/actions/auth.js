import api from "../utils/api";
import { setAlert } from "./alert";
import { getUserFeedProducts } from "./products";
import { getMyOrders } from "./orders";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    REGISTER_REQUEST,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    UPDATE_ME_REQUEST,
    UPDATE_ME_FAIL,
    UPDATE_ME_SUCCESS,
    UPDATE_MY_PASSWORD_FAIL,
    UPDATE_MY_PASSWORD_REQUEST,
    UPDATE_MY_PASSWORD_SUCCESS,
} from "../constants/authConstants";

import {
    GET_MY_PLUG_REQUEST,
    GET_MY_PLUG_SUCCESS,
    GET_MY_PLUG_FAIL,
} from "../constants/plugConstants";
import { GET_CATERGORIES_FAIL } from "../constants/catergoryConstants";
import { GET_UNBALANCED_SALES_FAIL } from "../constants/orderConstants";

export const updateMe = (formData) => async (dispatch) => {
    dispatch({
        type: UPDATE_ME_REQUEST,
    });

    try {
        const res = await api.patch(`/users/updateme`, formData);

        dispatch({
            type: UPDATE_ME_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: UPDATE_ME_FAIL,
        });
    }
};
export const updateMyPassword = (formData) => async (dispatch) => {
    dispatch({
        type: UPDATE_MY_PASSWORD_REQUEST,
    });

    try {
        const res = await api.patch(`/users/updatemypassword`, formData);

        dispatch({
            type: UPDATE_MY_PASSWORD_SUCCESS,
            payload: res.data,
        });

        dispatch(logout());
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: UPDATE_MY_PASSWORD_FAIL,
        });
    }
};

export const facebook = () => (dispatch) => {
    console.log("win");
    dispatch({
        type: REGISTER_REQUEST,
    });

    try {
        const res = api.get("/users/facebook");

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
        dispatch(loadMyPlug());
        dispatch(setAlert("Welcome!", "success"));
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};
// Register User
export const register = (formData) => async (dispatch) => {
    dispatch({
        type: REGISTER_REQUEST,
    });

    try {
        const res = await api.post("/users/signup", formData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
        dispatch(loadMyPlug());
        dispatch(setAlert("Welcome!", "success"));
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

export const login = (formData) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    });

    try {
        const res = await api.post("/users/login", formData);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        console.log(res.data);
        dispatch(loadUser());
        dispatch(loadMyPlug());

        dispatch(setAlert("Welcome!", "success"));
    } catch (err) {
        console.log(err);

        const errors = err.response.data.error;

        const errorArray = errors.split(",");

        if (errorArray) {
            errorArray.map((error) => dispatch(setAlert(error, "success")));
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    dispatch({
        type: REGISTER_REQUEST,
    });

    try {
        const res = await api.get("/users/me");

        dispatch({
            type: USER_LOADED,
            payload: res.data.data.doc,
        });
        dispatch(getMyOrders());
        dispatch(getUserFeedProducts());
    } catch (err) {
        console.log(err);
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

export const loadMyPlug = () => async (dispatch) => {
    dispatch({
        type: GET_MY_PLUG_REQUEST,
    });

    try {
        const res = await api.get("/plug2/myplug");
        // if(!res.data.data.plug){
        //     return dispatch(setAlert('Sorry you dont have a shop', 'danger'))
        //   }
        if (res?.data?.data?.plug) {
            dispatch({
                type: GET_MY_PLUG_SUCCESS,
                payload: res.data.data.plug,
            });




        } if (!res?.data?.data?.plug) {
            dispatch(setAlert('Please create a store !', "success"))

            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: AUTH_ERROR,
            });

        }

        console.log(res.data.data.plug);
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_MY_PLUG_FAIL,
        });
    }
};

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
    localStorage.removeItem("token");
    dispatch({ type: GET_MY_PLUG_FAIL });
    dispatch({ type: GET_UNBALANCED_SALES_FAIL });
};
