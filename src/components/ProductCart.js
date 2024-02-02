import "./ProductCard.css";
import React from "react";

export const ProductCart = ({ product }) => {
  return (
    <div className="productcard">
      <img className="" src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <div className="action">
        <p>${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
