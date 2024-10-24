import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <div>This is Cart </div>

      <div className="grid grid-cols-3 gap-7 mt-11 ">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col  border-2 border-black">
                <img src={item.image} alt="" className="h-auto w-[250px]" />
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};
