"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  compareAtPrice: number;
  thumbnail: string;
  quantity: number;
};

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = Cookies.get("cart");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(items), { expires: 7 });
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const itemExistInCart = prev.find((eItem) => eItem.id === item.id);
      if (itemExistInCart) {
        return prev.map((eItem) =>
          eItem.id === item.id
            ? { ...eItem, quantity: eItem.quantity + 1 }
            : eItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const decreaseItem = (id: string) => {
    setItems((prev) =>
      prev
        .map((eItem) =>
          eItem.id === id ? { ...eItem, quantity: eItem.quantity - 1 } : eItem
        )
        .filter((eItem) => eItem.quantity > 0)
    );
  };

  const updateItemQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((eItem) => (eItem.id === id ? { ...eItem, quantity } : eItem))
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((eItem) => eItem.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, decreaseItem, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
