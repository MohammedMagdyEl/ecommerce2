import {
  ALL_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_WISHLIST_ITEM,
  REMOVE_FROM_WISHLIST_ITEM,
} from "../type/type";

const initialState = {
  product: [],
  cartItems: [],
  wishlistItems: [],
};

export const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT:
      return {
        ...state,
        product: action.data,
      };

    case ADD_TO_CART:
      const newItem = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.some((item) => item.id === newItem.id)
          ? state.cartItems.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cartItems, { ...newItem, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case ADD_TO_WISHLIST_ITEM:
      const newWishlistTtem = action.payload;
      return {
        ...state,
        wishlistItems: state.wishlistItems.some(
          (item) => item.id === newWishlistTtem.id
        )
          ? state.wishlistItems.map((item) =>
              item.id === newWishlistTtem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.wishlistItems, { ...newWishlistTtem, quantity: 1 }],
      };

    case REMOVE_FROM_WISHLIST_ITEM:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
