import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_LIKE_MODAL,
} from "../types";

const initialState = {
  auth: false,
  catalog: false,
  like: false,
  basket: false,
  comments: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_MODAL:
      return { ...state, auth: !state.auth };
    case CHANGE_CATALOG_MODAL:
      return { ...state, catalog: !state.catalog };
    case CHANGE_LIKE_MODAL:
      return { ...state, like: !state.like };
    case CHANGE_BASKET_MODAL:
      return { ...state, basket: !state.basket };
    case CHANGE_COMMENTS_MODAL:
      return { ...state, comments: !state.comments };
    default:
      return state;
  }
};
