"use client";

import { useEffect } from "react";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { X } from "lucide-react";
import { useCart, useCartUI } from "@/hook/cart/useCart";
import Button from "../ui/Button";
import Link from "next/link";

export const SideCart = () => {
  const { items } = useCart();
  const { isOpen, closeCart } = useCartUI();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 backdrop-blur-[1px] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      <div
        className={`
    fixed top-0 right-0 h-full 
    w-full sm:w-[480px] bg-white shadow-xl z-50
    rounded-tl-[40px] rounded-bl-[40px]
    flex flex-col
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex items-center justify-between pt-6 pb-2 px-6 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close">
            <X className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        <div className="px-6 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center mt-6">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} item={item} variant="sidecart" />
            ))
          )}
        </div>

        <div>
          <CartSummary />
        </div>

        <div className="p-4 flex flex-col items-center justify-center">
          <Link href={"/cart"}>
            <Button
              variant="primary_oppsite_hover"
              className="!w-[350px]"
              onClick={closeCart}
            >
              CHECKOUT
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
