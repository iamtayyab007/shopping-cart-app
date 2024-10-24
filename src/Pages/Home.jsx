import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Store/cartSlice";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cart);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log(response.status);
      }
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action to add to the cart
    const isInCart = cartStore.find((items) => items.id === product.id);
    if (isInCart) {
      dispatch(removeFromCart(product));
    }
  };

  return (
    <>
      <div>This is home</div>

      <div>
        <h1 className="text-2xl">All products</h1>
        <div className="grid grid-cols-3 gap-4 m-11">
          {products.map((product) => (
            <div
              className="flex flex-col items-center border-4 border-black-300 p-3 rounded-lg"
              key={product.id}
            >
              <img src={product.image} className="h-auto w-[250px] mb-4" />

              <button
                onClick={() => {
                  handleAddCart(product); // Call the function to add the product to the cart
                }}
                className="bg-purple-400 p-3 rounded-2xl hover:cursor-pointer hover:bg-slate-300 mt-auto"
              >
                {cartStore.find((items) => items.id === product.id)
                  ? "Remove From Cart"
                  : "Add To Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
