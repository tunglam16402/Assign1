"use client";

import CartCheckOut from "@/components/cart/CartCheckOut";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function CartCheckOutPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current="" />
      <CartCheckOut />
    </div>
  );
}
