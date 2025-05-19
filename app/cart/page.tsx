import CartCheckoutClient from "@/components/cart/CartCheckoutClient";
import Breadcrumb from "@/components/common/Breadcrumb";

export default async function CartCheckoutPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current="" />
      <CartCheckoutClient />
    </div>
  );
}
