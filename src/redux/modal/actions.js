import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_LIKE_MODAL,
} from "../types";

export const changeStateAuthModal = () => {
  return {
    type: CHANGE_AUTH_MODAL,
  };
};

export const changeStateCatalogModal = () => {
  return {
    type: CHANGE_CATALOG_MODAL,
  };
};

export const changeStateLikeModal = () => {
  return {
    type: CHANGE_LIKE_MODAL,
  };
};

export const changeStateBasketModal = () => {
  return {
    type: CHANGE_BASKET_MODAL,
  };
};

export const changeStateCommentsModal = () => {
  return {
    type: CHANGE_COMMENTS_MODAL,
  };
};
