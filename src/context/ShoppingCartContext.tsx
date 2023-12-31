/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  imgSrc: string;
  quantity: number;
}

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number | undefined,
  increaseCartQuantity: (data: CartItem) => void,
  decreaseCartQuantity: (data: CartItem) => void,
  removeFromCart: (id: string) => void,
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: string) {
    return cartItems.find(item => item.id === id)?.quantity;
  }

  function increaseCartQuantity(data: CartItem) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === data.id) == null) {
        return [ ...currItems, { id: data.id, name: data.name, price: data.price, oldPrice: data.oldPrice, imgSrc: data.imgSrc,  quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === data.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(data: CartItem) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === data.id)?.quantity === 1) {
        return currItems.filter(item => item.id !== data.id)
      } else {
        return currItems.map(item => {
          if (item.id === data.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: string) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}