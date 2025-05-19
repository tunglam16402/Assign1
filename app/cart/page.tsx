import dynamic from "next/dynamic";
import Breadcrumb from "@/components/common/Breadcrumb";

const CartCheckoutClient = dynamic(
  () => import("@/components/cart/CartCheckoutClient"),
  { ssr: false }
);

export default function CartPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current="" />
      <CartCheckoutClient />
    </div>
  );
}
