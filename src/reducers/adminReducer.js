import initialState from "./initialState";
import * as types from "../constants/actionTypes";
import * as Products from "./cart.json"
export default function(state = Object.assign(Products.default, initialState) , action) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART : {
      let allProduct = [...state.addedCartProduct, action.data ];
      return { ...state, addedCartProduct: allProduct };
    }
    case types.REMOVE_PRODUCT_TO_CART : {
      return { ...state, removedProduct: action.data };
    }
    case types.UPDATE_PRODUCT_LIST : {
      let { selectedItem, items } = action.data;
      return { ...state, items: items, selectedItem };
    }
    case types.UPDATE_CART_PRODUCT_LIST : {
      return { ...state, addedCartProduct: action.data };
    }
    default:
      return state;
  }
}