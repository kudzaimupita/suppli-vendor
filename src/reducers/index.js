import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
// Selecting Local Storage to persist our redux data
import storage from "redux-persist/lib/storage";

import alertReducer from "./alertReducer";
import authtReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productReducer";

import { sendMessageReducer } from "./contactFormReducer";

import {
  addToWishlistReducer,
  removeFromWishlistReducer,
} from "./wishlistReducer";
import { getMaillistReducer, joinMaillistReducer } from "./maillistReducer";

import {
  getPlugReviewsReducer,
  getPlugReviewReducer,
  updatePlugReviewReducer,
  createPlugReviewReducer,
  deletePlugReviewReducer,
} from "./plugReviewsReducer";

import {
  getProductReviewsReducer,
  getProductReviewReducer,
  updateProductReviewReducer,
  createProductReviewReducer,
  deleteProductReviewReducer,
} from "./productReviewsReducer";

import {
  getCatergoriesReducer,
  getCatergoryReducer,
  updateCatergoryReducer,
  createCatergoryReducer,
  deleteCatergoryReducer,
} from "./catergoryReducer";

import {
  getSubCatergoriesReducer,
  getSubCatergoryReducer,
  updateSubCatergoryReducer,
  createSubCatergoryReducer,
  deleteSubCatergoryReducer,
} from "./subCatergoryReducer";

import {
  getMyPlugReducer,
  getPlugReducer,
  getPlugsReducer,
  deletePlugReducer,
  updatePlugReducer,
  createPlugReducer,
  followPlugReducer,
  unfollowPlugReducer,
} from "./plugReducer";

import {
  getAllProductsReducer,
  getFilteredResultsReducer,
  getPopularProductsReducer,
  getNewArrivalsReducer,
  getPlugWithProductsFrontPageReducer,
  getProductReducer,
  getProductsByPlugReducer,
  getRandomProductsByPlugReducer,
  getSearchedProductsReducer,
  getUserFeedProductsReducer,
  createProductReducer,
  updateProductReducer,
  deleteProductReducer,
  getProductStats,
} from "./productReducer";

import {
  getMyOrdersReducer,
  createOrderReducer,
  getPlugSalesList,
  getOrdersList,
  getUnbalancedSales,
  deleteOrderReducer,
  updateOrderReducer,
  getPlugWeeklyStats,
  getPlugDailyStats,
} from "./orderReducer";

import {
  createRefundReducer,
  getMyRefundsReducer,
  getRefundReducer,
  updateRefundReducer,
} from "./refundsReducer";
import {
  createEmailCampaignReducer,
  getEmailCampignsReducer,
} from "./plugEmailCampaigns";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "product", "myPlug", "myOrders", "userFeed"],
};

const rootReducer = combineReducers({
  removedFromwishlist: removeFromWishlistReducer,
  addedToWishlist: addToWishlistReducer,
  createdRefund: createRefundReducer,
  myRefunds: getMyRefundsReducer,
  refund: getRefundReducer,
  updatedRefund: updateRefundReducer,
  maillist: getMaillistReducer,
  joinedMaillist: joinMaillistReducer,
  sentMessage: sendMessageReducer,
  alert: alertReducer,
  auth: authtReducer,
  cart: cartReducer,
  plugReviews: getPlugReviewsReducer,
  plugReview: getPlugReviewReducer,
  deletedPlugReview: deletePlugReviewReducer,
  createdPlugReview: createPlugReviewReducer,
  updatedPlugReview: updatePlugReviewReducer,

  productReviews: getProductReviewsReducer,
  productReview: getProductReviewReducer,
  deletedProductReview: deleteProductReviewReducer,
  createdProductReview: createProductReviewReducer,
  updatedProductReview: updateProductReviewReducer,
  // products: productsReducer,
  catergories: getCatergoriesReducer,
  catergory: getCatergoryReducer,
  deletedCatergory: deleteCatergoryReducer,
  createdCatergory: createCatergoryReducer,
  updatedCatergory: updateCatergoryReducer,
  subCatergories: getSubCatergoriesReducer,
  subCatergory: getSubCatergoryReducer,
  deletedSubCatergory: deleteSubCatergoryReducer,
  createdSubCatergory: createSubCatergoryReducer,
  updatedSubCatergory: updateSubCatergoryReducer,
  createdPlug: createPlugReducer,
  deletedPlug: deletePlugReducer,
  plug: getPlugReducer,
  plugs: getPlugsReducer,
  followedPlug: followPlugReducer,
  unfollowedPlug: unfollowPlugReducer,
  updatedPlug: updatePlugReducer,
  myPlug: getMyPlugReducer,
  allProducts: getAllProductsReducer,

  filteredProducts: getFilteredResultsReducer,
  popularProducts: getPopularProductsReducer,
  newArrivals: getNewArrivalsReducer,
  plugProducts: getPlugWithProductsFrontPageReducer,
  product: getProductReducer,
  products: getProductsByPlugReducer,
  randomProducts: getRandomProductsByPlugReducer,
  searchedProducts: getSearchedProductsReducer,
  userFeed: getUserFeedProductsReducer,
  productStats: getProductStats,
  createdProduct: createProductReducer,
  updatedProduct: updateProductReducer,
  deletedProduct: deleteProductReducer,
  plugStats: getPlugWeeklyStats,
  plugDailyStats: getPlugDailyStats,
  myOrders: getMyOrdersReducer,
  createdOrder: createOrderReducer,
  plugSales: getPlugSalesList,
  orders: getOrdersList,
  unBalancedSales: getUnbalancedSales,
  deletedOrder: deleteOrderReducer,
  updatedOrder: updateOrderReducer,
  createdEmailCampaign: createEmailCampaignReducer,

  emailCampaigns: getEmailCampignsReducer,
});

export default persistReducer(persistConfig, rootReducer);
