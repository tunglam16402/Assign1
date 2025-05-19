// components/client/CartCheckOutWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const CartCheckOut = dynamic(() => import("@/components/cart/CartCheckOut"), {
  ssr: false,
});

export default function CartCheckOutWrapper() {
  return <CartCheckOut />;
}
