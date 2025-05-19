/* eslint-disable react-hooks/rules-of-hooks */

import CartCheckoutClient from "@/components/cart/CartCheckoutClient";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function CartCheckOutPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current="" />
      <CartCheckoutClient />
    </div>
  );
}
