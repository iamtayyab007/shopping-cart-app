import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around">
      <h1 className="text-2xl text-purple-400 font-bold">
        React-Redux Shopping Cart
      </h1>
      <ul className="flex gap-11">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};
