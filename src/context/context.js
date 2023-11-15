import React, { createContext, useContext, useEffect, useState } from "react";
import { SERVER_PATH } from "../util/const";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [update, setUpdate] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState(
    JSON.parse(window.localStorage.getItem("wishlist_items")) || []
  );
  const [cartlist, cartCartlist] = useState(
    JSON.parse(window.localStorage.getItem("cart_items")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("wishlist_items", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    window.localStorage.setItem("cart_items", JSON.stringify(cartlist));
  }, [cartlist]);

  const handleCartList = (item) => {
    fetch(`${SERVER_PATH}/${item.status}/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        like: item.like,
        status: item.status,
        img: item.img,
        label: item.label,
        new: item.new,
        cart: !item.cart,
        price: item.price,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUpdate(!update);
        console.log(res);
        res.cart
          ? cartCartlist((e) => [...e, res])
          : cartCartlist((e) =>
              e.filter((a) => a.status + a.id !== res.status + res.id)
            );
      });
  };

  return (
    <UserContext.Provider
      value={{
        update,
        setUpdate,
        wishlist,
        setWishlist,
        cartOpen,
        setCartOpen,
        cartlist,
        cartCartlist,
        handleCartList
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
