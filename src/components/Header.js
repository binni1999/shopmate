import "./Header.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      <Link to={"/"} className="logo">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shopping-cart-logo-design-template-0bd5ecad376e9cf5ab1e70fb3c8df3c4_screen.jpg?ts=1584204397"
          alt="shopping cart"
        />
        <span>ShoppingCart</span>
      </Link>
      <nav className="navigation">
        <NavLink to={"/"} className="link" end>
          Home
        </NavLink>
        <NavLink to={"/cart"} className={"link"}>
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
