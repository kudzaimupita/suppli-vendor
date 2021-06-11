import api from "../utils/api";
import { setAlert } from "./alert";

import { getProduct } from "./products";

import {
  CREATE_PRODUCT_REVIEW_REQUEST,
  CREATE_PRODUCT_REVIEW_SUCCESS,
  CREATE_PRODUCT_REVIEW_FAIL,
} from "../constants/productReviewConstants";

// Register User

export const createProductReview = (formData, id) => async (dispatch) => {
  dispatch({
    type: CREATE_PRODUCT_REVIEW_REQUEST,
  });

  try {
    const res = await api.post(`/products/${id}/reviews`, formData);

    dispatch({
      type: CREATE_PRODUCT_REVIEW_SUCCESS,
      payload: res.data.data,
    });

    dispatch(setAlert("Successfully rated this product", "success"));
    console.log(res.data.data);
  } catch (err) {
    const errors = err.response.data.error;

    const errorArray = errors.split(",");

    if (errorArray) {
      errorArray.map((error) => dispatch(setAlert(error, "danger")));
    }

    dispatch({
      type: CREATE_PRODUCT_REVIEW_FAIL,
    });
  }
};
