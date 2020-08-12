export const initLocalStorage = () => {
  if (!localStorage.length) {
    localStorage.setItem("goods/visited", "[]");
    localStorage.setItem("goods/likes", "[]");
    localStorage.setItem("goods/basket", "[]");
    localStorage.setItem("auth/token", "");
    localStorage.setItem("auth/userData", "");
  }
};

export const get = (id) => JSON.parse(localStorage.getItem(id));

export const set = (id, value) =>
  localStorage.setItem(id, JSON.stringify(value));

export const contains = (arr, elem, getElem = false) => {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === elem._id) {
        return getElem ? i : true;
      }
    }
    return false;
  } catch (e) {
    return true;
  }
};
