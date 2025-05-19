import CartCheckOutWrapper from "@/components/cart/CartCheckOutWrapper";
import Breadcrumb from "@/components/common/Breadcrumb";

export default async function CartCheckoutPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current=""/>
      <CartCheckOutWrapper />
    </div>
  );
}
