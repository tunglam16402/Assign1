"use client";

import { CartItem } from "@/components/cart/CartItem";
import { useCart } from "@/hook/cart/useCart";
import React from "react";
import { CartSummary } from "./CartSummary";
import Link from "next/link";
import Button from "../ui/Button";

const CartCheckOut = () => {
  const { items } = useCart();

  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="py-20 text-center">
          <Link href={"/products"}>
            <h1 className=" text-5xl mb-6">Your cart is empty!</h1>
            <Button variant="primary" className="!w-[310px] text-xl">
              Click here to start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-semibold mb-8">Shopping Cart</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/5 space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} variant="checkout" />
              ))}
            </div>

            <div className="w-full lg:w-2/5 space-y-4">
              <CartSummary />
              <Button variant="primary_oppsite_hover">CHECKOUT</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCheckOut;
