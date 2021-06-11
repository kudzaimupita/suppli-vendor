import api from "../utils/api";
import { setAlert } from "./alert";
import {
  GET_MY_ORDERS_FAIL,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
} from "../constants/orderConstants";

// Register User

export const getMyOrders = () => async (dispatch) => {
  dispatch({
    type: GET_MY_ORDERS_REQUEST,
  });

  try {
    const res = await api.get("/orders/myorders");

    dispatch({
      type: GET_MY_ORDERS_SUCCESS,
      payload: res.data.data,
    });
    console.log(res.data.data);
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_MY_ORDERS_FAIL,
    });
  }
};
