import React from "react";
import { useDispatch } from "react-redux";
import * as Order from "../orderStyles";
import { addStock, deleteItem, minusStock } from "../../../redux";

export default function OrderItem({ name, stock, id }) {
  const dispatch = useDispatch();

  return (
    <Order.ItemContainer>
      <Order.ItemStock>{stock}</Order.ItemStock>
      <Order.ItemButton
        onClick={() => {
          dispatch(addStock(id));
        }}
      >
        +
      </Order.ItemButton>
      <Order.ItemButton
        onClick={() => {
          dispatch(minusStock(id));
        }}
      >
        -
      </Order.ItemButton>
      <Order.ItemName>{name}</Order.ItemName>
      <Order.DeleteButton onClick={() => dispatch(deleteItem(id))}>
        delete
      </Order.DeleteButton>
    </Order.ItemContainer>
  );
}
