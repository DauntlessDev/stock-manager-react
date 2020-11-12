import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux";
import * as Order from "./orderStyles";
import OrderItem from "./small-components/OrderItem";

export default function OrderContainer() {
  const order = useSelector((state) => state.order);
  const [inputItemName, setInputItemName] = useState("");
  const [inputStockAmount, setInputStockAmount] = useState(-1);
  const dispatch = useDispatch();

  return (
    <Order.Container>
      <Order.Header>Stock Manager - {order.items.length}</Order.Header>
      {order.items.map((item) => {
        return (
          <OrderItem
            id={item.id}
            key={item.id}
            name={item.name}
            stock={item.stock}
          />
        );
      })}
      <Order.FormContainer>
        <Order.FormInput
          value={inputItemName}
          onChange={({ target }) => setInputItemName(target.value)}
          type="text"
          placeholder="Item Name"
        />
        <Order.FormInput
          value={inputStockAmount}
          onChange={({ target }) => setInputStockAmount(target.value)}
          type="number"
          placeholder="Current Stock"
        />
        <Order.FormButton
          onClick={() => {
            inputItemName !== "" &&
            inputStockAmount !== -1 
              ? dispatch(addItem(inputItemName, inputStockAmount))
              : console.log("please fill all the empty fields.");
          }}
        >
          Add Item
        </Order.FormButton>
      </Order.FormContainer>
    </Order.Container>
  );
}
