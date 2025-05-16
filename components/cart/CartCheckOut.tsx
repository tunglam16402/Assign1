"use client";

import { CartItem } from "@/components/cart/CartItem";
import { useCart } from "@/hook/cart/useCart";
import React from "react";

const CartCheckOut = () => {
  const { items } = useCart();

  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => <CartItem key={item.id} item={item} />)
      )}{" "}
    </div>
  );
};

export default CartCheckOut;
