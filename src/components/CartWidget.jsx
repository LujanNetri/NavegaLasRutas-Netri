import React from "react";
import "../css/cartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget({totalItems}) {
  return (
    <button type="button">
      <FaShoppingCart />
      <span id="counter">{totalItems}</span>
    </button>
  );
}
