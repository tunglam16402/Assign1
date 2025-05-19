"use client";

import dynamic from "next/dynamic";
import React from "react";

const CartCheckOut = dynamic(() => import("./CartCheckOut"), {
  ssr: false,
});

const CartCheckoutClient = () => {
  return <CartCheckOut />;
};

export default CartCheckoutClient;
