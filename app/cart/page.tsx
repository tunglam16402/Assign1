import CartCheckOut from "@/components/cart/CartCheckOut";
import Breadcrumb from "@/components/common/Breadcrumb";

export default async function CartCheckoutPage() {
  return (
    <div className="w-main mx-auto">
      <Breadcrumb base="cart" current=""/>
      <CartCheckOut />
    </div>
  );
}
