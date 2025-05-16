"use client";

import { useCart } from "@/hook/cart/useCart";


export const CartSummary = () => {
  const { items } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="py-4 px-10 border-t mt-4">
      <div className="flex justify-between font-semibold">
        <span>Subtotal:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
