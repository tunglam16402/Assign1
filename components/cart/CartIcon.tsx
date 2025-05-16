// components/cart/CartIcon.tsx
"use client";

import { useCart } from "@/hook/cart/useCart";
import { ShoppingCart } from "lucide-react";

export const CartIcon = ({ onClick }: { onClick: () => void }) => {
  const { items } = useCart();
  const totalQty = items.reduce((sum, x) => sum + x.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded text-hover cursor-pointer"
      aria-label="Mở giỏ hàng"
    >
      <ShoppingCart className="w-6 h-6" />
      {totalQty > 0 && (
        <span className="absolute -top-1 -right-1 bg-darker-main-color text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalQty}
        </span>
      )}
    </button>
  );
};
