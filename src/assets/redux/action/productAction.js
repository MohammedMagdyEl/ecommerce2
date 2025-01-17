import { arrayOfProducts } from "../../componant/arryeOfProduct";

import {
  ALL_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_WISHLIST_ITEM,
  REMOVE_FROM_WISHLIST_ITEM,
} from "../type/type"; // Ensure correct import path

export const getProduct = () => {
  return { type: ALL_PRODUCT, data: arrayOfProducts }; // Use the correct action type
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};
export const addToWishlistItems = (id) => {
  return {
    type: ADD_TO_WISHLIST_ITEM,
    payload: id,
  };
};

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const removeFromWishlistItems = (id) => ({
  type: REMOVE_FROM_WISHLIST_ITEM,
  payload: id,
});

export const updateCartQuantity = (id, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { id, quantity },
  };
};
