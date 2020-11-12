import { combineReducers } from "redux";
import orderReducer from "./order/orderReducer";

const rootReducer = combineReducers({
  order: orderReducer,
});

export default rootReducer;
