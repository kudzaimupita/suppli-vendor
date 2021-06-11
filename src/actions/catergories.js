import api from "../utils/api";
import { setAlert } from "./alert";

import {
  GET_CATERGORIES_FAIL,
  GET_CATERGORIES_SUCCESS,
  GET_CATERGORIES_REQUEST,
} from "../constants/catergoryConstants";

export const getCatergories = () => async (dispatch) => {
  dispatch({
    type: GET_CATERGORIES_REQUEST,
  });

  try {
    const res = await api.get("/catergories");

    dispatch({
      type: GET_CATERGORIES_SUCCESS,
      payload: res.data.data.doc,
    });
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_CATERGORIES_FAIL,
    });
  }
};
