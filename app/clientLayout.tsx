"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/context/cart/CartProvider";
import { CartUIProvider } from "@/context/cart/CartUIContext";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Menu/Nav/Navbar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <CartUIProvider>
        <TopHeader />
        <Navbar />
        {children}
      </CartUIProvider>
    </CartProvider>
  );
}
