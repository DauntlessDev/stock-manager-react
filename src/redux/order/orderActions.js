import { ADD_ITEM, ADD_STOCK, MINUS_STOCK, DELETE_ITEM } from "./orderTypes";

export const addStock = (key) => {
  return { type: ADD_STOCK, payload: key };
};

export const minusStock = (key) => {
  return { type: MINUS_STOCK, payload: key };
};

export const addItem = (name, amount) => {
  return { type: ADD_ITEM, item: { name: name, stock: amount }, payload: 0 };
};

export const deleteItem = (key) => {
  console.log("delete");
  return { type: DELETE_ITEM, payload: key };
};
