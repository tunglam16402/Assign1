"use client";

import { useCart } from "@/hook/cart/useCart";
import { Trash2 } from "lucide-react";
import type { CartItem as CI } from "@/context/cart/CartProvider";
import Image from "next/image";
import { QuantitySelector } from "./CartQuantitySelector";
import clsx from "clsx";

interface CartItemProps {
  item: CI;
  variant?: "sidecart" | "checkout";
}

export const CartItem = ({ item, variant = "sidecart" }: CartItemProps) => {
  const { removeItem, addItem, decreaseItem, updateItemQuantity } = useCart();

  return (
    <div
      className={clsx(
        "flex justify-between border-b border-gray-400 py-2 ",
        variant === "checkout"
          ? "items-start gap-6 sm:flex-row  sm:items-center sm:gap-2"
          : "items-center"
      )}
    >
      <Image
        src={item.thumbnail}
        alt="cart item thumbnail"
        width={100}
        height={100}
        className="object-contain w-full max-w-[140px] h-[160px] mr-0 sm:mr-4"
      />

      <div
        className={clsx(
          "space-y-2",
          variant === "checkout" &&
            "flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-6"
        )}
      >
        <p className="text-sm line-clamp-3">{item.title}</p>
        <div className="flex items-center gap-2">
          <p className="font-bold">
            ${(item.quantity * item.price).toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 line-through text-main-color">
            ${(item.quantity * item.compareAtPrice).toFixed(2)}
          </p>
        </div>
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => addItem(item)}
          onDecrease={() => decreaseItem(item.id)}
          onChange={(value) => updateItemQuantity(item.id, value)}
        />
      </div>

      <button
        onClick={() => removeItem(item.id)}
        aria-label="Remove from cart"
        className="mt-2 sm:mt-0 sm:ml-4 p-1 hover:bg-gray-100 rounded cursor-pointer self-start sm:self-auto"
      >
        <Trash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
};
