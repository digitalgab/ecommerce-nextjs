"use client";

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  id: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (id: string) => void;
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(id: string) {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (item) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevItems, { id, quantity: 1 }];
    });
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);

