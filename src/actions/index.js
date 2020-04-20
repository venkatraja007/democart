import * as types from "../constants/actionTypes";

export function resetApp(data) {
  return {
    type: types.ACTION_RESET_APP,
    data
  };
}

export function initialSetup(data) {
  return {
    type: types.ASSIGN_INITIAL_DATA,
    data
  };
}
export function addProductToCart(data) {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    data
  };
}
export function updateProdcutList(data) {
  return {
    type: types.UPDATE_PRODUCT_LIST,
    data
  };
}
export function updateCartProdcutList(data) {
  return {
    type: types.UPDATE_CART_PRODUCT_LIST,
    data
  };
}
export function loadProdcutList(data) {
  return {
    type: types.ALL_PRODUCT_LIST,
    data
  };
}

