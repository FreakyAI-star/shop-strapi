'use client'

import React, { useEffect, useState, ReactElement } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

interface CartItem {
  item: string;
  price: number;
}

interface ChildProps {
  cart: CartItem[];
  removeFromCart: (item: string, qty: number) => void;
  addToCart: (item: string, qty: number, price: number) => void;
  clearCart: () => void;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [reloadKey, setReloadKey] = useState(1);

  useEffect(() => {
    console.log("I am useeffect from ClientLayout.tsx");
  }, []);

  const addToCart = (item: string, qty: number, price: number) => {
    console.log("Add to cart");
    let newCart = [...cart];
    for (let index = 0; index < qty; index++) {
      newCart.push({ item, price });
    }
    console.log("Add to cart", newCart);
    setCart(newCart);
    setReloadKey(Math.random());
  };

  const removeFromCart = (item: string, qty: number) => {
    let newCart = [...cart];
    let index = newCart.findIndex(cartItem => cartItem.item === item);
    if (index !== -1) {
      newCart.splice(index, qty);
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <NavBar key={reloadKey} cart={cart} />
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<ChildProps>, { cart, removeFromCart, addToCart, clearCart });
        }
        return child;
      })}
      <Footer />
    </>
  );
}