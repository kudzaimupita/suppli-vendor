import api from "../utils/api";
import { setAlert } from "./alert";
import {
  GET_PLUG_SALES_LIST_FAIL,
  GET_PLUG_SALES_LIST_REQUEST,
  GET_PLUG_SALES_LIST_SUCCESS,
  GET_UNBALANCED_SALES_FAIL,
  GET_UNBALANCED_SALES_REQUEST,
  GET_UNBALANCED_SALES_SUCCESS,
  GET_PLUG_WEEKLY_STATS_SUCCESS,
  GET_PLUG_WEEKLY_STATS_FAIL,
  GET_PLUG_WEEKLY_STATS_REQUEST,
  GET_PLUG_DAILY_STATS_SUCCESS,
  GET_PLUG_DAILY_STATS_FAIL,
  GET_PLUG_DAILY_STATS_REQUEST,
} from "../constants/orderConstants";

import {
  UPDATE_PLUG_FAIL,
  UPDATE_PLUG_REQUEST,
  UPDATE_PLUG_SUCCESS,
  CREATE_PLUG_FAIL,
  CREATE_PLUG_SUCCESS,
  CREATE_PLUG_REQUEST,
  GET_PLUG_FAIL,
  GET_PLUG_REQUEST,
  GET_PLUG_SUCCESS,
  FOLLOW_PLUG_FAIL,
  FOLLOW_PLUG_REQUEST,
  FOLLOW_PLUG_SUCCESS,
  UNFOLLOW_PLUG_FAIL,
  UNFOLLOW_PLUG_REQUEST,
  UNFOLLOW_PLUG_SUCCESS,
} from "../constants/plugConstants";
import { loadMyPlug } from "./auth";

// Register User

export const createPlug = (formData, history) => async (dispatch) => {
  dispatch({
    type: CREATE_PLUG_REQUEST,
  });

  try {
    const res = await api.post("/vendors", formData);

    dispatch({
      type: CREATE_PLUG_SUCCESS,
      payload: res.data.data.data,
    });
    console.log(res.data.data.data);
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: CREATE_PLUG_FAIL,
    });
  }
};

export const getPlugStats = (id) => async (dispatch) => {
  dispatch({
    type: GET_PLUG_SALES_LIST_REQUEST,
  });

  try {
    const res = await api.get(`/orders/sales`);
    console.log(res.data.data);
    dispatch({
      type: GET_PLUG_SALES_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    const errorArray = errors.split(",");
    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }
    dispatch({
      type: GET_PLUG_SALES_LIST_FAIL,
    });
  }
};

export const getDueAmount = () => async (dispatch) => {
  dispatch({
    type: GET_UNBALANCED_SALES_REQUEST,
  });

  try {
    const res = await api.get(`/orders/salesdue`);
    console.log(res.data.data);
    dispatch({
      type: GET_UNBALANCED_SALES_SUCCESS,
      payload: res.data.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_UNBALANCED_SALES_FAIL,
    });
  }
};

export const getPlugWeeklyStats = () => async (dispatch) => {
  dispatch({
    type: GET_PLUG_WEEKLY_STATS_REQUEST,
  });

  try {
    const res = await api.get(`/orders/weeklystats`);
    console.log(res.data.data);
    dispatch({
      type: GET_PLUG_WEEKLY_STATS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_PLUG_WEEKLY_STATS_FAIL,
    });
  }
};

export const getPlugDailyStats = () => async (dispatch) => {
  dispatch({
    type: GET_PLUG_DAILY_STATS_REQUEST,
  });

  try {
    const res = await api.get(`/orders/dailystats`);
    console.log(res.data.data);
    dispatch({
      type: GET_PLUG_DAILY_STATS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_PLUG_DAILY_STATS_FAIL,
    });
  }
};

export const getPlug = (id) => async (dispatch) => {
  dispatch({
    type: GET_PLUG_REQUEST,
  });

  try {
    const res = await api.get(`/vendors/${id}`);
    console.log(res.data.data);
    dispatch({
      type: GET_PLUG_SUCCESS,
      payload: res.data.data,
    });
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_PLUG_FAIL,
    });
  }
};

export const followPlug = (id) => async (dispatch) => {
  dispatch({
    type: FOLLOW_PLUG_REQUEST,
  });

  try {
    const res = await api.put(`/vendors/follow/${id}`);
    console.log(res.data.data);
    dispatch({
      type: FOLLOW_PLUG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(getPlug(id));
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.error;
    console.log(err.response.data.error);
    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: FOLLOW_PLUG_FAIL,
    });
  }
};

export const unfollowPlug = (id) => async (dispatch) => {
  dispatch({
    type: UNFOLLOW_PLUG_REQUEST,
  });

  try {
    const res = await api.put(`/vendors/unfollow/${id}`);
    console.log(res.data.data);
    dispatch({
      type: UNFOLLOW_PLUG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(getPlug(id));
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.error;
    console.log(err.response.data.error);
    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: UNFOLLOW_PLUG_FAIL,
    });
  }
};

export const updatePlug = (data, history) => async (dispatch) => {
  dispatch({
    type: UPDATE_PLUG_REQUEST,
  });

  try {
    const res = await api.patch(`/vendors`, data);

    dispatch({
      type: UPDATE_PLUG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadMyPlug());
    dispatch(setAlert("Details successfully updated", "success"));
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.error;
    console.log(err.response.data.error);
    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: UPDATE_PLUG_FAIL,
    });
  }
};
