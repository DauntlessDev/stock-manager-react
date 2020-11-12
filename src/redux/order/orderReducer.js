import { v4 as uuidv4 } from "uuid";

const {
  ADD_STOCK,
  MINUS_STOCK,
  ADD_ITEM,
  DELETE_ITEM,
} = require("./orderTypes");

const initialState = {
  items: [
    {
      id: 0,
      stock: 3,
      name: "stock1",
    },
    {
      id: 1,
      stock: 3,
      name: "stock2",
    },
    {
      id: 2,
      stock: 5,
      name: "stock3",
    },
  ],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("items", state.items);
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuidv4(),
            name: action.item.name,
            stock: action.item.stock,
          },
        ],
      };
    case DELETE_ITEM: {
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };
    }
    case ADD_STOCK: {
      state.items.find((item) => item.id === action.payload).stock++;
      return { ...state };
    }
    case MINUS_STOCK: {
      state.items.find((item) => item.id === action.payload).stock--;
      return { ...state };
    }
    default:
      return state;
  }
};

export default orderReducer;
