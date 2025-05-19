// app/cart/page.tsx
import dynamic from "next/dynamic";
import Breadcrumb from "@/components/common/Breadcrumb";

const CartCheckOut = dynamic(() => import("@/components/cart/CartCheckOut"), {
  ssr: false,
});

export default function CartCheckoutPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current="" />
      <CartCheckOut />
    </div>
  );
}
