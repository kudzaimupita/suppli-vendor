import api from "../utils/api";
import { setAlert } from "./alert";

import {
  GET_SUBCATERGORIES_FAIL,
  GET_SUBCATERGORIES_SUCCESS,
  GET_SUBCATERGORIES_REQUEST,
} from "../constants/subCatergoryConstants";

export const getSubCategories = () => async (dispatch) => {
  dispatch({
    type: GET_SUBCATERGORIES_REQUEST,
  });

  try {
    const res = await api.get("/subcatergories");

    dispatch({
      type: GET_SUBCATERGORIES_SUCCESS,
      payload: res.data.data.doc,
    });
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "success")));
    }

    dispatch({
      type: GET_SUBCATERGORIES_FAIL,
    });
  }
};
