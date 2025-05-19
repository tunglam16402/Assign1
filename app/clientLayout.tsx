"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/context/cart/CartProvider";
import { CartUIProvider } from "@/context/cart/CartUIContext";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <CartUIProvider>
       
        {children}
      </CartUIProvider>
    </CartProvider>
  );
}
